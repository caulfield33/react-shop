import React, {ReactElement} from "react";
import {connect} from "react-redux";
import {IApplicationState} from "../models/IApplicationState";
import {AuthData} from "../store/auth/types";

type Props = {
    authData?: AuthData | null;
    children: ReactElement;
    requiredRoles: string[];
}

const HasPermission: React.FC<Props> = React.memo(({
                                                       children,
                                                       authData,
                                                       requiredRoles,
                                                   }) => {

    if (requiredRoles.length === 0) return children

    return  authData && authData.user && authData.user.roles.some(item => requiredRoles.includes(item)) ? children : null
})

const mapStateToProps = ({auth}: IApplicationState) => ({
    authData: auth.authData
});

export default connect(mapStateToProps) (HasPermission);
