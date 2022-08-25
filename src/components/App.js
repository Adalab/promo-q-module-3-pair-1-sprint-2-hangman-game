import { useEffect, useState } from 'react';

// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Instructions from './Instructions';
import Options from './Options';

function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };
  const changeWord = (value) => {
    setWord(value);
    setUserLetters([]);
    setLastLetter('');
  };

  return (
    <div className="page">
      <Header />
      <main className="main">
        <section>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SolutionLetters word={word} userLetters={userLetters} />
                  <ErrorLetters word={word} userLetters={userLetters} />
                  <Form
                    lastLetter={lastLetter}
                    handleLastLetter={handleLastLetter}
                  />
                </>
              }
            />
            <Route path="/instructions" element={<Instructions />} />
            <Route
              path="/options"
              element={<Options word={word} changeWord={changeWord} />}
            />
          </Routes>
        </section>
        <Dummy numberOfErrors={getNumberOfErrors()} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
