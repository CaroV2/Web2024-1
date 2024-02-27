import React, { useRef } from 'react'
import './Button.css'
import less from '../../assets/less-bones.png'
import add from '../../assets/more-bones.png'
import reset from '../../assets/reset.png'

import sless from '../../sounds/less.wav'
import sreset from '../../sounds/reset.wav'
import sadd from '../../sounds/add.wav'

export function Button ({ count, setCount }) {
  const audioRefLess = useRef(null)
  const audioRefAdd = useRef(null)
  const audioRefReset = useRef(null)

  const playSound = (audioRef) => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  return (
    <div className='buttons'>
      <button className='button-less' onClick={() => { playSound(audioRefLess); setCount(count > 0 ? count - 1 : 0) }}>
        <img src={less} alt='less button' />
        <audio ref={audioRefLess} src={sless} />
      </button>
      <button className='button-reset' onClick={() => { playSound(audioRefReset); setCount(0) }}>
        <img src={reset} alt='reset button' />
        <audio ref={audioRefReset} src={sreset} />
      </button>
      <button className='button-add' onClick={() => { playSound(audioRefAdd); setCount(count + 1) }}>
        <img src={add} alt='add button' />
        <audio ref={audioRefAdd} src={sadd} />
      </button>
    </div>
  )
}
