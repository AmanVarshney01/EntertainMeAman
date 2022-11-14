export const getFormattedDate = (d: string) => {
    const date = new Date(d);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

export const removeSpaces = (string: string, target: string, replacement: string) => {
    
    string = string.replaceAll(target, replacement).replaceAll("'", "").replaceAll(":", "")
    return string.toLowerCase();
};