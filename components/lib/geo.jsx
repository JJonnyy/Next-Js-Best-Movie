export const geo = async () => {
    const url = 'https://ip-geo-location.p.rapidapi.com/ip/check?format=json';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5a5ef4587dmshbcbb157ed6d6b5ep1806bdjsn07ad4c261c93',
            'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
        }
    };
    const res = await fetch(url, options);
    const data = await res.json();
    const city = data.city.name;
    return city
}