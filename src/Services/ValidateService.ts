const isEmptyOrSpaces = (str: string) => str === null || str.match(/^ *$/) !== null;

export const validateValues = (...values: string[]): boolean => {
    let isValid = true;

    values.forEach(value => {
        if (isEmptyOrSpaces(value)) isValid = false
    });

    return isValid;
}

export const validateFormValue = (value: string, isSubmitted: boolean): boolean => validateValues(value) || !isSubmitted;