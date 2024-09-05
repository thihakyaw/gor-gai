import React from "react";
import "./App.css";
import { alphabetsMM } from "./constants/alphabetsMM";
import startAudio from "./sfx/start.mp3";
import clickAudio from "./sfx/click.mp3";

function App() {
  const alphabets = alphabetsMM;
  const [startIsVisible, setStartIsVisible] = React.useState(true);
  const [menuIsVisible, setMenuIsVisible] = React.useState(false);
  const [startSound] = React.useState(new Audio(startAudio));
  const [clickSound] = React.useState(new Audio(clickAudio));
  const [currentAlphabet, setCurrentAlphabet] = React.useState(
    alphabets.middle[0]
  );

  React.useEffect(() => {
    return () => {
      startSound.pause();
      startSound.currentTime = 0;
    };
  }, [startSound]);
  React.useEffect(() => {
    return () => {
      clickSound.pause();
      clickSound.currentTime = 0;
    };
  }, [clickSound]);

  React.useEffect(() => {
    return () => {
      startSound.pause();
      startSound.currentTime = 0;
    };
  }, [startSound]);

  const handleStart = () => {
    setStartIsVisible(false);
    startSound.play();
    setMenuIsVisible(true);
  };

  const handleNextLetter = () => {
    clickSound.play();
    const flatAlphabets = alphabets.middle.concat(
      alphabets.high,
      alphabets.low
    );

    setCurrentAlphabet(
      flatAlphabets[Math.floor(Math.random() * flatAlphabets.length)]
    );
  };
  return (
    <div className="App">
      {startIsVisible && (
        <h3
          className="h3--center-text h3--text h3--fade-away-text"
          onClick={handleStart}
        >
          ထိခြင်းဖြင့်စတင်ပါ
        </h3>
      )}
      {startIsVisible && (
        <small className="small--center-text small--text">
          "ဤသင်ထောက်ကူသည် ထိုင်းဗျည်းများနှင်း မစိမ်းကားသွားစေရန်သာဖြစ်ပြီး
          ဘာသာစကားတက်ကျွမ်းမှုသည် မိမိကြိုးစားအားထုတ်မှုနှင့်သာဆိုင်သည်။"
        </small>
      )}
      {menuIsVisible && (
        <div>
          <h3
            className="h3--menu-center-text h3--menu-text h3--menu-fade-away-text"
            onClick={handleNextLetter}
          >
            {currentAlphabet.letter}
          </h3>
          <span>
            <h3 className="h3--sub-menu-center-text h3--sub-menu-text h3--sub-menu-fade-away-text">
              {currentAlphabet.pronunciation}
            </h3>
            <p className="p--sub-menu-text">[{currentAlphabet.group}]</p>
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
