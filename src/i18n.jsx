import en from './translate/en.json'
import ru from './translate/ru.json'
import es from './translate/es.json'
import ge from './translate/ge.json'
import fr from './translate/fr.json'

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

const resources = {
    en: {
        translation: en,
    },

    ru: {
        translation: ru,
    },

    es: {
        translation: es,
    },

    ge: {
        translation: ge
    },

    fr: {
        translation: fr
    }

}

i18n
    .use(initReactI18next)
    .init({ resources, lng: JSON.parse(localStorage.getItem('language')), 
    fallbackLng: 'ru'
});

export default i18n