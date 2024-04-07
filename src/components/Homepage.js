import React from 'react';
import { useTranslation } from 'react-i18next';

function Homepage() {
    const { t, i18n } = useTranslation(); 

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <>
            <button onClick={() => changeLang("np")} className='np m-2'>Np</button>
            <button onClick={() => changeLang("en")} className='en m-2'>Eng</button>
            <button onClick={() => changeLang("ch")} className='ch m-2'>Ch</button>

            <h2>{t("greeting")} hello</h2>
        </>
    );
}

export default Homepage;
