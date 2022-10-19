import React, { useState, memo } from 'react';
import { TextField, FormGroup, ValidationRule } from '..';
import { usePasswordValidation } from '../../hooks';
import { Icon } from '../../icon';
import style from './style.module.scss';

export const EmployeeForm = memo(({ data, onClick = () => { } }) => {
    const defaultValues = {
        firstName: data?.firstName || "",
        lastName: data?.lastName || "",
    };
    const [password, setPassword] = useState({
        firstPassword: "",
        secondPassword: "",
    });
    const [
        validLength,
        hasNumber,
        upperCase,
        lowerCase,
        match,
    ] = usePasswordValidation({
        firstPassword: password.firstPassword,
        secondPassword: password.secondPassword,
    });
    const [values, setValues] = useState(defaultValues);
    const [error, setError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const setFirst = (name, value) => setPassword({ ...password, [name]: value });
    const setSecond = (name, value) => setPassword({ ...password, [name]: value });
    const checkIfCanSubmit = () => requiredValues.every((v) => values[v]);
    const requiredValues = ["firstName", "lastName"];
    const updateValues = (name, value) => setValues({ ...values, [name]: value });

    const handlePasswordValidation = () => {
        let firstPasswordLength = password.firstPassword.length;
        let secondPasswordLength = password.secondPassword.length;
        if (firstPasswordLength === 0 && secondPasswordLength === 0) {
            setPasswordError(false);
        } else if (!validLength || !hasNumber || !upperCase || !lowerCase || !match) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handlePasswordValidation();
        let isFormValid = checkIfCanSubmit();
        if (!isFormValid) {
            setError(true);
        }
        else {
            setError(false);
        }
    };

    return (
        <div id={data} className={style.employee_form_container}>
            <div onClick={onClick} className={style.form_overlay_header}>
                <h1>Update Employee</h1>
                <Icon name="x-14x14" />
            </div>
            <div className={style.employee_form_wrapper}>
                <div className={style.employee_name_wrapper}>
                    <Icon name={"people-18x15"} />
                    <span>{`${data?.firstName}  ${data?.lastName}`}</span>
                </div>
                <FormGroup title={"Employee Info"}>
                    <TextField
                        defaultValue={defaultValues.firstName}
                        isError={error}
                        label={"First Name"}
                        type={"text"}
                        onChange={updateValues}
                        name={"firstName"}
                    />
                    <TextField
                        defaultValue={defaultValues.lastName}
                        isError={error}
                        label={"Last Name"}
                        type={"text"}
                        onChange={updateValues}
                        name={"lastName"}
                    />
                </FormGroup>
                <FormGroup isColumn title={"Update Password"}>
                    <TextField
                        type={"password"} label={"Password"}
                        onChange={setFirst}
                        name={"firstPassword"}
                        errorMessage={"Password must pass all rules"}
                        isError={passwordError}
                    />
                    <TextField
                        label={"Confirm Password"}
                        type={"password"}
                        onChange={setSecond}
                        name={"secondPassword"}
                        errorMessage={"Password must pass all rules"}
                        isError={passwordError}
                    />
                    <div className={style.password_validation_wrapper}>
                        <ValidationRule rule={"8 or more characters"} isValid={validLength} />
                        <ValidationRule rule={"At least 1 number"} isValid={hasNumber} />
                        <ValidationRule rule={"Uppercase"} isValid={upperCase} />
                        <ValidationRule rule={"Lowercase"} isValid={lowerCase} />
                        <ValidationRule rule={"Passwords match"} isValid={match} />
                    </div>
                </FormGroup>
                <div className={style.actions_wrapper}>
                    <button onClick={onSubmit}>Save Employee Info</button>
                    <span onClick={onClick}>Cancel</span>
                </div>
            </div>
        </div>
    );
});
