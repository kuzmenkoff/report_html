
const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};


function task4Execute() {
    const today = new Date();
    upcomingCities = Object.keys(concerts)
    upcomingCities = upcomingCities.filter(city => concerts[city] > today);
    upcomingCities.sort((a, b) => concerts[a] - concerts[b]);
    console.log(upcomingCities);
}
