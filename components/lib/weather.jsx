export const weather = async (town) => {
    const key = 'c34b9a3270228a19ed557575ba76392c';
    // const town = 'Kyiv';
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&lang=ua&appid=${key}`);
    const data = await res.json();

    return data;
}