export const dryStatus = (status) => {
    switch (status) {
        case 'Alive':
            return "green";
        case 'Dead':
            return "red";
        case 'unknown':
            return 'yellow';
        default:
            return null;
    }
}