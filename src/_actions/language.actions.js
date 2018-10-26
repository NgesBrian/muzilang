import { languageConstants } from '../_constants';

export const languageActions = {
    setLanguage,
    getLanguage

};

function setLanguage(language) {
    return dispatch => {
        localStorage.setItem('language', language);
         dispatch(setlanguage(language));
    
    };
    function setlanguage(language) { return { type: languageConstants.SET_LANGUAGE, language } }
   
}

function getLanguage() {
    let lang;
     return dispatch => {
       lang = localStorage.getItem('language');
       if(!lang){
         lang = 'en';
       }
        dispatch(getlanguage(lang));
    
    };
   function getlanguage(language) { return { type: languageConstants.GET_LANGUAGE, language } }
}
