export interface IHeaderItem {
    path?: string;
    label: string;
    callback?: () => void;
    requiredRoles?: string[];
    auth?: boolean;
}