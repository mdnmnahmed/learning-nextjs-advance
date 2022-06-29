export const validateInputFields = (fields) => {
    for (let key in fields) {
        if (fields[key].trim() === "") {
            throw `${key} is Required, please fill ${key}.`;
        }
    }
}