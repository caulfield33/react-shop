import React, {createContext, useState} from 'react';

export type Language = "EN" | "UA" | "IT"
export type Theme = "BLACK" | "GREY" | "WHITE"

type AppSettings = {
    language: Language,
    theme: Theme,
    loading: boolean
}

const appSettings: AppSettings = JSON.parse(localStorage.getItem('test-app') || '{}') as AppSettings;

type Props = {
    children: React.ReactNode;
};

type Context = {
    language: Language;
    theme: Theme;
    loading: boolean;
    setContext: (settings: {language?: Language, theme?: Theme, loading?: boolean}) => void;
};

const initialContext: Context = {
    language:  appSettings.language,
    theme: appSettings.theme,
    loading: false,
    setContext: (): void => {
        throw new Error('setContext function must be overridden');
    },
};

const AppContext = createContext<Context>(initialContext);

const AppContextProvider = ({children}: Props): JSX.Element => {
    const [contextState, _setContext] = useState<Context>(initialContext);

    const setContext = (settings: {language?: Language, theme?: Theme, loading?: boolean}) => {
        const values = {...contextState, ...settings};
        delete values.setContext

        localStorage.setItem('test-app', JSON.stringify(values))

        _setContext((prevState => {
            return  {...prevState, ...settings}
        }))
    }

    return (
        <AppContext.Provider value={{...contextState, setContext}}>
            {children}
        </AppContext.Provider>
    );
};

export {AppContext, AppContextProvider};