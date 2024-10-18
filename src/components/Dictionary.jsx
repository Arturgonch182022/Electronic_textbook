import React, { useState } from 'react';
import dictionary from '../chapters/dictionary';

const Dictionary = ({ language }) => {
    const [term, setTerm] = useState('');
    const [definition, setDefinition] = useState('');

    const handleSearch = () => {
        const termDefinition = dictionary[language][term];
        setDefinition(termDefinition ? termDefinition : (language === 'ru' ? 'Термин не найден.' : 'Term not found.'));
    };

    return (
        <div>
            <h2>{language === 'ru' ? 'Словарь' : 'Dictionary'}</h2>
            <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder={language === 'ru' ? 'Введите термин' : 'Enter term'}
            />
            <button onClick={handleSearch}>{language === 'ru' ? 'Найти' : 'Search'}</button>
            <p>{definition}</p>
        </div>
    );
};

export default Dictionary;