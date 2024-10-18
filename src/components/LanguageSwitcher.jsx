import React, { useState } from 'react';

const LanguageSwitcher = ({ onLanguageChange }) => {
    const [language, setLanguage] = useState('ru');

    const toggleLanguage = () => {
        const newLanguage = language === 'ru' ? 'en' : 'ru';
        setLanguage(newLanguage);
        onLanguageChange(newLanguage);
    };

    return (
        <button onClick={toggleLanguage}>
            {language === 'ru' ? 'Switch to English' : 'Переключить на русский'}
        </button>
    );
};

export default LanguageSwitcher;