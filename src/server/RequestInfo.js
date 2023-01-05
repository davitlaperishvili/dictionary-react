const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export default async function RequestInfo(word) {
    try {
        const response = await fetch(BASE_URL + word);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log("Error", e);
        return false;
    }
}
