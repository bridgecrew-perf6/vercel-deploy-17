export const capitalize = (text: string) => {
    return text.replace(/\b\w/g, (l) => l.toUpperCase());
};
