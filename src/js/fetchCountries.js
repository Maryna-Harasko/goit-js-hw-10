export const BASE_URL = "https://restcountries.com/v2/name/";
export const fieldsFilter = "?fields=name,capital,population,flags,languages";

export function fetchCountries(country){
    return fetch(`${BASE_URL}${country}${fieldsFilter}`).then(response =>{
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.json();
    });
   
}
