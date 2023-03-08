import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries';
import {createMarkupList, clearMarkup, deleteMarkup, renderCardCountry} from './js/markup';

const inputEl = document.querySelector('#search-box');

const DEBOUNCE_DELAY = 300;

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(event){
    let country = event.target.value.trim();

    if(country === ''){
        clearMarkup();
        return;
    }

    fetchCountries(country).then(data =>{
        checkDataCountry(data)
    })
    .catch(error => {
        console.log(error);
        Notiflix.Notify.failure('Oops, there is no country with that name.');
    });
}

function checkDataCountry(data){
    if(data.length > 10){
        Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.');
        clearMarkup();
        return;
    }
    if(data.length !== 1){
        createMarkupList(data);
        return;
    }
    else {
        renderCardCountry(data);
        return;
    }
};
