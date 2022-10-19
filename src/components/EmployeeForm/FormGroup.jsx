import React from 'react';
import style from './style.module.scss';

export const FormGroup = ({ children, title, isColumn = false }) => {
    const Header = ({ title }) => (
        <>
            <h2 className={style.section_header} style={{ title }}>{title}</h2>
        </>
    );

    return (
        <>
            <Header title={title} />
            <div className={style.form_group} style={{ flexDirection: isColumn && 'column' }}>
                {children}
            </div>
        </>
    );
};

