import React, { useState } from 'react';
import style from './style.module.scss';
import { ErrorMessage } from '..';

export const TextField = ({
    onChange = () => { },
    onBlur = () => { },
    type,
    name,
    defaultValue,
    required,
    value,
    label,
    icon,
    isError = false,
    errorMessage,
}) => {
    const [inputValue, setInputValue] = useState(defaultValue || value);
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setInputValue(value);
        onChange(name, value);
    };

    return (
        <div className={style.input_container}>
            {!isError ?
                <label>{label}</label>
                : <ErrorMessage>{errorMessage}</ErrorMessage>}
            <div
                className={style.input_wrapper}
            >
                {icon && (
                    <div className={style.input_icon_wrapper}>
                        <img alt="field-type-indicator" draggable={false} src={icon} />
                    </div>
                )}
                <input
                    type={type}
                    name={name}
                    required={required}
                    defaultValue={defaultValue}
                    className={`${style.input_field} ${isError && "error"}`}
                    onChange={onInputChange}
                    onBlur={({ target }) => onBlur(target.name, target.value)}
                    value={value}
                />
            </div>
        </div>
    );
};
