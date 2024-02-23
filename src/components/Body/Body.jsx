import { useState } from 'react'
import { Counter } from '../Counter/Counter'
import { Button } from '../Button/Button'
import './Body.css'

export function Body () {
  const [count, setCount] = useState(0)
  return (
    <body>
      <Counter count={count} />
      <Button count={count} setCount={setCount} />
    </body>
  )
}
