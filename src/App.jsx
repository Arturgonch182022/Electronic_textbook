import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // Импортируем Footer
import Lecture from './components/Lecture';
import Quiz from './components/Quiz';
import Practice from './components/Practice';
import Dictionary from './components/Dictionary';
import lecturesContent from './chapters/LecturesContent';
import quizzesContent from './chapters/quizzesContent';
import practiceContent from './chapters/practiceContent';

const App = () => {
    const [language, setLanguage] = useState('ru');

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <Router>
            <Header onLanguageChange={handleLanguageChange} language={language} />
            <main>
                <Routes>
                    <Route path="/" element={<h2>{language === 'ru' ? 'Добро пожаловать в электронный учебник!' : 'Welcome to the electronic textbook!'}</h2>} />
                    <Route path="/lectures" element={<Lecture content={lecturesContent} language={language} />} />
                    <Route path="/quizzes" element={<Quiz content={quizzesContent} language={language} />} />
                    <Route path="/practices" element={<Practice content={practiceContent} language={language} />} />
                    <Route path="/dictionary" element={<Dictionary language={language} />} />
                </Routes>
            </main>
            <Footer /> {/* Добавляем Footer */}
        </Router>
    );
};

export default App;