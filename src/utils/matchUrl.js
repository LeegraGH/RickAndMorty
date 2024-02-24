export const matchUrl = (url) => {
    const regex = '\\/api[\\w \\/]+';
    return url.match(regex);
}