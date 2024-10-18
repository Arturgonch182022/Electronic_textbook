import React from 'react';

const Practice = ({ content, language }) => {
    const practiceContent = content[language]; // Используйте текущий язык

    return (
        <div>
            <h2>{language === 'ru' ? 'Практические задания' : 'Practice Tasks'}</h2>
            {practiceContent.map((item, index) => (
                <div key={index}>
                    <p>{item.task}</p>
                    <p><em>{item.example}</em></p>
                </div>
            ))}
        </div>
    );
};

export default Practice;