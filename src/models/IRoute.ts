import React from "react";
import {RouteComponentProps} from "react-router-dom";

export interface IRoute {
    isPublic?: boolean;
    component: React.FC<RouteComponentProps>;
    layout:  React.FC<{isLogged: boolean}>;
    path: string;
    allowedForLogged: boolean;
    exec?: boolean;
    requiredRoles?: string[]
}