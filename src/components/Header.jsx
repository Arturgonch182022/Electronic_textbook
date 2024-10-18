import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from 'react-router-dom';

const Header = ({ onLanguageChange, language }) => {
    return (
        <header>
            <h1>{language === 'ru' ? 'Электронный учебник по БЖЧ' : 'Electronic Textbook on БЖЧ'}</h1>
            <LanguageSwitcher onLanguageChange={onLanguageChange} />
            <nav>
                <Link to="/lectures">{language === 'ru' ? 'Лекции' : 'Lectures'}</Link>
                <Link to="/quizzes">{language === 'ru' ? 'Тесты' : 'Quizzes'}</Link>
                <Link to="/practices">{language === 'ru' ? 'Практические задания' : 'Practice Tasks'}</Link>
                <Link to="/dictionary">{language === 'ru' ? 'Словарь' : 'Dictionary'}</Link>
            </nav>
        </header>
    );
};

export default Header;