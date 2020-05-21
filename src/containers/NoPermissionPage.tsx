import React from 'react';

type Props = {
    requiredRoles: string[]
}

const NoPermissionPage: React.FC<Props> = ({requiredRoles}) => (
    <>
        Following permission required: {requiredRoles.join(', ')}
    </>
);

export default NoPermissionPage