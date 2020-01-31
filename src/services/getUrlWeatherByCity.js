import { url_base_waether, api_key } from "./../constans/api_url";

const getUrlWeatherByCity = city => {
  return `${url_base_waether}?q=${city}&appid=${api_key} `;
};

export default getUrlWeatherByCity;
