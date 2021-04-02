export const fieldsValidation = (data: any) => {
    let errors = {}
    for (const key in data) {
        if (isEmpty(data[key])) {
            errors[key] = `${key} fields is required`
        }
    }

    return {errors, isValid: isEmpty(errors)}
}

const isEmpty = (value: any) => value === undefined ||
    value === null || typeof value === "object" && Object.keys(value).length === 0 ||
    typeof value === "string" && value.trim().length === 0
