import { useState, useEffect } from "react";

export const usePasswordValidation = ({
    firstPassword = "",
    secondPassword = "",
    minLength = 8,
    numberValidation = true,
    lowercaseValidation = true,
    uppercaseValidation = true,
    lengthValidation = true,
}) => {
    const [validLength, setValidLength] = useState(null);
    const [hasNumber, setHasNumber] = useState(null);
    const [upperCase, setUpperCase] = useState(null);
    const [lowerCase, setLowerCase] = useState(null);
    const [match, setMatch] = useState(null);

    useEffect(() => {
        setValidLength(firstPassword.length >= minLength ? true : false);
        setUpperCase(firstPassword.toLowerCase() !== firstPassword);
        setLowerCase(firstPassword.toUpperCase() !== firstPassword);
        setHasNumber(/\d/.test(firstPassword));
        setMatch(firstPassword && firstPassword === secondPassword);

    }, [
        firstPassword,
        secondPassword,
        validLength,
        lengthValidation,
        uppercaseValidation,
        lowercaseValidation,
        numberValidation,
    ]);

    return [validLength, hasNumber, upperCase, lowerCase, match];
}
