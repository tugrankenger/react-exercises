import { useEffect, useMemo, useState } from 'react';
import Quiz from './components/Quiz';
import Start from './components/Start';
import './App.css';
import Timer from './components/Timer';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('0 $');
  const [username, setUsername] = useState(null);

  const data = [
    {
      id: 1,
      question: 'Who is the protector of seven kingdoms?',
      answers: [
        {
          text: 'Tugran Kenger',
          correct: true,
        },
        {
          text: 'Eddard Stark',
          correct: false,
        },
        {
          text: 'Robert Barethoen',
          correct: false,
        },
        {
          text: 'Daenerys Targaryen',
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which is the largest city in the USA's largest state?",
      answers: [
        {
          text: 'Dallas',
          correct: false,
        },
        {
          text: 'Los Angeles',
          correct: false,
        },
        {
          text: 'New York',
          correct: false,
        },
        {
          text: 'Anchorage',
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: 'In which palace was Queen Elizabeth I born?',
      answers: [
        {
          text: 'Greenwich',
          correct: true,
        },
        {
          text: 'Richmond',
          correct: false,
        },
        {
          text: 'Hampton Court',
          correct: false,
        },
        {
          text: 'Kensington',
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: 'What is the Celsius equivalent of 77 degrees Fahrenheit?',
      answers: [
        {
          text: '15',
          correct: false,
        },
        {
          text: '20',
          correct: false,
        },
        {
          text: '25',
          correct: true,
        },
        {
          text: '30',
          correct: false,
        },
      ],
    },
  ];
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: '$ 100' },
        { id: 2, amount: '$ 200' },
        { id: 3, amount: '$ 300' },
        { id: 4, amount: '$ 500' },
        { id: 5, amount: '$ 1000' },
        { id: 6, amount: '$ 2000' },
        { id: 7, amount: '$ 4000' },
        { id: 8, amount: '$ 8000' },
        { id: 9, amount: '$ 16000' },
        { id: 10, amount: '$ 32000' },
        { id: 11, amount: '$ 64000' },
        { id: 12, amount: '$ 125000' },
        { id: 13, amount: '$ 250000' },
        { id: 14, amount: '$ 500000' },
        { id: 15, amount: '$ 1000000' },
      ].reverse(),
    []
  );

  useEffect(() => {
    if (questionNumber > 1) {
      let earnedAmount = moneyPyramid.find(
        (item) => item.id === questionNumber - 1
      ).amount;
      setEarned(earnedAmount);
    }
    // questionNumber > 1 &&
    //   setEarned(
    //     moneyPyramid.find((item) => item.id === questionNumber - 1).amount
    //   );
  }, [moneyPyramid, questionNumber]);

  return (
    <div className='app'>
      {username ? (
        <>
          <div className='main'>
            {stop ? (
              <>
                <h1 className='earned'>{username} Earned : {earned}</h1>
              </>
            ) : (
              <>
                <div className='top'>
                  <div className='timer'>
                    <Timer questionNumber={questionNumber} setStop={setStop} />
                  </div>
                </div>
                <div className='bottom'>
                  <Quiz
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setStop={setStop}
                  />
                </div>
              </>
            )}
          </div>
          <div className='pyramid'>
            <ul className='moneyList'>
              {moneyPyramid.map((item) => (
                <li
                  key={item.id}
                  className={
                    questionNumber === item.id
                      ? 'moneyListItem active'
                      : 'moneyListItem'
                  }
                >
                  <span className='moneyListItemNumber'>{item.id}</span>
                  <span className='moneyListItemAmount'>{item.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start username={username} setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
