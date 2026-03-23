import { useTranslation } from "react-i18next"
import useLocalstorage from "../hook/useLocalstorage"
import i18n from "../i18n";
import { changeLanguage } from "i18next";

const Card = () => {
    const{t} = useTranslation();
    const [language, setLanguage] = useLocalstorage('language', 'ru');


    const handleLanguageChange = () => {
        if(language === 'fr'){
            i18n.changeLanguage('ru');
            setLanguage('ru');
        } else if (language === 'ru'){
            i18n.changeLanguage('en');
            setLanguage('en');
        } else if (language === 'en') {
            i18n,changeLanguage('es');
            setLanguage('es');
        } else if (language === 'es') {
            i18n,changeLanguage('ge');
            setLanguage('ge');
        } else if (language === 'ge') {
            i18n,changeLanguage('fr');
            setLanguage('fr');
        }
    };



    return (
        <div className="buttons">
            <h1>{t('welcome')}</h1>
            <button onClick = {handleLanguageChange}>{t('button')}</button>
            <button onClick = {() => window.location.reload()}>{t('refresh')}</button>
        </div>
    )
}

export default Card