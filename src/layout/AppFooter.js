import React from 'react';

export const AppFooter = (props) => {

    return (
        <div className="layout-footer">
            <img src={props.layoutColorMode === 'light' ? 'https://lilithbe.github.io/post-admin/assets/layout/images/logo-dark.svg' : 'https://lilithbe.github.io/post-admin/assets/layout/images/logo-white.svg'} alt="Logo" height="20" className="mr-2" />
            Post
            <span className="font-medium ml-2">Admin</span>
        </div>
    );
}
