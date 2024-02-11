export const http = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
    try {
        const response = await fetch(url, {method, body, headers});

        if (!response.ok) {
            throw new Error(`Fetching ${url} failed: ${response.status}`);
        }

        return await response.json();
    } catch (e) {
        throw e;
    }
}