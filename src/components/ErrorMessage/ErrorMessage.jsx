import React, { useMemo } from "react";
import style from "./style.module.scss";

const GeneralApiMessage = "This field is required.";

export const ErrorMessage = ({ children }) => {
    const content = useMemo(
        () =>
            typeof children === "string" ? children : GeneralApiMessage,
        [children]
    );
    return (
        <div className={style.error_message_wrapper}>
            <label className="error">
                {content}
            </label>
        </div>
    );
};
