import React, { useState } from 'react';

const Lecture = ({ content, language }) => {
    const [currentPart, setCurrentPart] = useState(0);
    const [showQuestion, setShowQuestion] = useState(false);
    const [answer, setAnswer] = useState('');

    const lectureContent = content[language]; // Используйте текущий язык

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setCurrentPart(currentPart + 1);
            setShowQuestion(false);
        } else {
            alert(language === 'ru' ? 'Попробуйте снова!' : 'Try again!');
        }
    };

    return (
        <div>
            <h2>{language === 'ru' ? `Часть ${currentPart + 1}` : `Part ${currentPart + 1}`}</h2>
            <p>{lectureContent[currentPart].text}</p>
            <button onClick={() => setShowQuestion(true)}>
                {language === 'ru' ? 'Следующая часть' : 'Next part'}
            </button>
            {showQuestion && (
                <div>
                    <p>{lectureContent[currentPart].question}</p>
                    <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
                    <button onClick={() => handleAnswer(answer === lectureContent[currentPart].correctAnswer)}>
                        {language === 'ru' ? 'Ответить' : 'Submit'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Lecture;