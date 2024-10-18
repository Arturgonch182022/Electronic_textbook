// components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Ваше Имя. Все права защищены.</p>
            <p>
                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a> |
                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Контакты</a>
            </p>
        </footer>
    );
};

export default Footer;