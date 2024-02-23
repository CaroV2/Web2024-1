import './Button.css'

export function Button ({ count, setCount }) {
  return (
    <div className='buttons'>
      <button className='button-less' onClick={() => setCount(count > 0 ? count - 1 : 0)}> - </button>
      <button className='button-reset' onClick={() => setCount(0)}> Reset </button>
      <button className='button-add' onClick={() => setCount(count + 1)}> + </button>
    </div>
  )
}
