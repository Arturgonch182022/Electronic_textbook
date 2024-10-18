import React from 'react';

const Quiz = ({ content, language }) => {
    const quizContent = content[language]; // Используйте текущий язык

    return (
        <div>
            <h2>{language === 'ru' ? 'Тесты' : 'Quizzes'}</h2>
            {quizContent.map((item, index) => (
                <div key={index}>
                    <p>{item.question}</p>
                    <ul>
                        {item.options.map((option, idx) => (
                            <li key={idx}>{option}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Quiz;