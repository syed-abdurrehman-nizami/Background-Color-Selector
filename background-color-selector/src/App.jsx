import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('blue')

  return (
    <>
      <div className='w-full h-screen duration-200 text-center text-4xl' style={{backgroundColor : color}}>
        <h1 style={{color : 'white'}} className=' font-bold' >Welcome to the background changer project by vite + react</h1>
          <div className=' fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'>
            <div className=' flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-2 rounded-full'>
              <button className='outline-none px-5 py-1 rounded-full font-bold shadow-lg' style={{backgroundColor : 'red'}} onClick={ () => setColor('red')}>red</button>

              <button className='outline-none px-5 py-1 rounded-full font-bold shadow-lg' style={{backgroundColor : 'purple'}} onClick={ () => setColor('purple')}>purple</button>

              <button className='outline-none px-5 py-1 rounded-full font-bold shadow-lg' style={{backgroundColor : 'olive'}} onClick={ () => setColor('olive')}>olive</button>

              <button className='outline-none px-5 py-1 rounded-full font-bold shadow-lg' style={{backgroundColor : 'green'}} onClick={ () => setColor('green')}>green</button>

              <button className='outline-none px-5 py-1 rounded-full font-bold shadow-lg' style={{backgroundColor : 'orange'}} onClick={ () => setColor('orange')}>orange</button>

              <button className='outline-none px-5 py-1 rounded-full font-bold shadow-lg' style={{backgroundColor : 'yellow'}} onClick={ () => setColor('yellow')}>yellow</button>

              <button className='outline-none px-5 py-1 rounded-full font-bold shadow-lg' style={{backgroundColor : 'brown'}} onClick={ () => setColor('brown')}>brown</button>

            </div>
          </div>
      </div>
    </>
  )
}

export default App

