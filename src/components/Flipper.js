import {useRef, useEffect} from 'react'
import "./Flipper.scss"

export default function Flipper({number, label}) {
  const el = useRef()
  const prev = useRef()

  if(el.current && prev.current !== number)  el.current.classList.remove('flip')

  useEffect(() => {
    if(el.current) el.current.classList.add('flip')
  }, [number])

  const prevNumber = (number + 1) % 60
  prev.current = number

  const numberString = String(number).padStart(2, '0')
  const prevNumberString = String(prevNumber).padStart(2, '0')

  return (
    <div ref={el} className="flipper">
      <div className="flipper__half flipper__half--top flipper__half--behind">
        <span className="flipper__hole flipper__hole--left"></span><span className="flipper__hole flipper__hole--right"></span>
        <span className="flipper__number">{numberString}</span>
      </div>
      <div className="flipper__half flipper__half--bottom flipper__half--front">
        <span className="flipper__hole flipper__hole--left"></span><span className="flipper__hole flipper__hole--right"></span>
        <span className="flipper__number">{prevNumberString}</span>
      </div>
      <div className="flipper__half flipper__half--bottom flipper__half--back">
        <span className="flipper__hole flipper__hole--left"></span><span className="flipper__hole flipper__hole--right"></span>
        <span className="flipper__number">{numberString}</span>
      </div>
      <div className="flipper__half flipper__half--top flipper__half--front">
        <span className="flipper__hole flipper__hole--left"></span><span className="flipper__hole flipper__hole--right"></span>
        <span className="flipper__number">{prevNumberString}</span>
      </div>
      <h4 className="flipper__label">{label}</h4>
    </div>
  )
}
