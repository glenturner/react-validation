import React, { useState } from 'react';
import style from './style.module.scss';

export const Modal = ({
    onDismiss = () => { },
    children = null,
    isOpen = false,
}) => {
    if (!isOpen) return null;
    return (
        <div className={style.modal_wrapper}>
            <div className={style.children}>{children}</div>
            <div className={style.clickable} onClick={onDismiss} />
        </div>
    );
};
