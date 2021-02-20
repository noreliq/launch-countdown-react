import './App.scss';
import Flipper from './Flipper';
import {useState, useCallback, useEffect} from 'react'
import {Facebook, Pinterest, Instagram} from '../icons'

const today = new Date()
const todaySeconds = today.valueOf() / 1000
const targetSeconds = todaySeconds + 86400 * 14 

const startCount = Math.round(targetSeconds - todaySeconds);

function getValues(seconds){
  const d = Math.floor(seconds / (3600*24));
  const h = Math.floor(seconds % (3600*24) / 3600);
  const m = Math.floor(seconds % 3600 / 60);
  const s = Math.floor(seconds % 60);
  return [d, h, m, s]
}



function App() {
  const [seconds, setSeconds] = useState(startCount)

  const tick = useCallback(() => {
    setSeconds((prevVal) => Math.max(prevVal - 1, 0))
  })

  useEffect(() => setInterval(tick, 1000), [])

  const values = getValues(seconds)

  return (
    <div className="App">
      <h1>We're launching soon</h1>
      <div className="App__flippers">
        <Flipper number={values[0]} label="days" />
        <Flipper number={values[1]} label="hours" />
        <Flipper number={values[2]} label="minutes" />
        <Flipper number={values[3]} label="seconds" />
      </div>
      <div className="App__socials">
        {Facebook}{Pinterest}{Instagram}
      </div>
    </div>
  );
}

export default App;
