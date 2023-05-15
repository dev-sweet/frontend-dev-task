import React from 'react'
import Root from './layout/Root'
import Options from './components/Child/Options'

const App = () => {
  return (
    <div className='bg-[#ecfafc] w-[100%] h-screen flex justify-center items-center'>
      <Root/>
      {/* options */}
      <Options/>
    </div>
  )
}

export default App