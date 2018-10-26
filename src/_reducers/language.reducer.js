import { languageConstants } from '../_constants';

let language =  localStorage.getItem('language');
if(!language || language === 'undefined'){
  localStorage.setItem('language', 'en' );
  language = 'en';
}

export function languagetion(state = {language}, action) {
  switch (action.type) {
    case languageConstants.SET_LANGUAGE:
      return {
        lanState: true,
        language: action.language
      };
       case languageConstants.GET_LANGUAGE:
      return {
        lanState: true,
        language: action.language
      };
    default:
      return state
  }
}
