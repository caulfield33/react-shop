
type ActionKey = `_SUCCESS`

export const actionCreator = (actions: string[], type: string) => {
    let actionTypes: any = {};

    actions.forEach(action => {
        actionTypes[`${action.toLocaleUpperCase()}_SUCCESS`] = `@@${type}/${action.toLocaleUpperCase()}_SUCCESS`;
        actionTypes[`${action.toLocaleUpperCase()}_FAILURE`] = `@@${type}/${action.toLocaleUpperCase()}_FAILURE`;
        actionTypes[`${action.toLocaleUpperCase()}_REQUEST`] = `@@${type}/${action.toLocaleUpperCase()}_REQUEST`;
    });

    return actionTypes;
}

const a = actionCreator(['test'], 't')