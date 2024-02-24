export const paramsFilter = (page, getState, type) => {
    const {[type]: {filters}} = getState();

    const existingFilters = Object.entries(filters).filter(([key, value]) => value !== "")

    return new URLSearchParams([['page', page], ...existingFilters]).toString();
}