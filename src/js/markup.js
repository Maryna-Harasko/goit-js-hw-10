const countryList = document.querySelector('.country-list');

export let markup = '';

export function createMarkupList(data){
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        markup += `<li class="list_item">
            <img width="40px" height="40px" src="${data[i].flags.svg}">
            <p class="textCountry" >${data[i].name}</p>
        </li>`;
    }
    renderList(markup);
}

export function renderCardCountry(data){
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        const lang = `${[data[i].languages].map(item => {
            return Object.values(item).join(', ');
        })}`;
        markup += `<li class="list_item">
        <img width="120px" height="120px" src="${data[i].flags.svg}">
        <p class="textCountry" >${data[i].name}</p>
        <p><b>Capital:</b> ${data[i].capital}</p>
        <p><b>Population:</b> ${data[i].population}</p>
        <p><b>Languages:</b> ${lang}</p>
    </li>`;
    }
}

export function clearMarkup(){
    markup = '';
}

export function deleteMarkup(){
    countryList.innerHTML = '';
}

export function renderList(markup){
    countryList.innerHTML = markup;
    clearMarkup();
}
