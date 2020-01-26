const location = "Buenos Aires,ar";
const api_key = "e81f33d4b0951f97644eb0c9718fc510";
const url_base_waether = "https://api.openweathermap.org/data/2.5/weather";
const api_waether = `${url_base_waether}?q=${location}&appid=${api_key} `;

export default api_waether;
