import React, { useEffect, useState } from 'react';
// import useSound from 'use-sound';
// import playy from '../assets/sounds/play.wav';

export default function Quiz({
  data,
  questionNumber,
  setQuestionNumber,
  setStop,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');
  // const [play] = useSound(playy);
  // let context;
  //   useEffect(() => {
  //     context = new AudioContext();
  //     context.resume().then(() => {
  //       console.log('Playback resumed successfully');
  //     });
  //     play();
  //   }, [play]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (item) => {
    setSelectedAnswer(item);
    setClassName('answer active');
    delay(2000, () =>
      setClassName(item.correct ? 'answer correct' : 'answer wrong')
    );
    delay(6000, () => {
      if (item.correct) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setStop(true);
      }
    });
  };
  return (
    <div className='quiz'>
      <div className='question'>{question?.question}</div>
      <div className='answers'>
        {question?.answers.map((item) => (
          <div
            key={item.id}
            className={selectedAnswer === item ? className : 'answer'}
            onClick={() => handleClick(item)}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
