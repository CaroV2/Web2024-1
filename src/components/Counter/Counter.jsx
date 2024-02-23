import './Counter.css'

export function Counter ({ count }) {
  return (
    <div className='counter'>
      <h3>{count}</h3>
    </div>
  )
}
