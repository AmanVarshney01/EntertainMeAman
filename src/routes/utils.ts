export const getFormattedDate = (d: string) => {
    const date = new Date(d);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

export const removeSpaces = (string: string, target: string, replacement: string) => {
    for (let i = 0; i < string.length; i++) {
        string = string.replace(target, replacement);
    }
    return string.toLowerCase();
};