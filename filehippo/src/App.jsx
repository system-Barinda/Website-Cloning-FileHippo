import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeaderMenu from './components/navaBar'
import MinHeader from './components/minHeader'
import ContainerApp from './components/containerApp'

function App() {
  

  return (
    <>
      <HeaderMenu />
      <MinHeader />
      <div className="timeruning-box bg-blue-600 text-white flex h-20 justify-between w-full  items-center  ">
         <div className="right-time w-[30%]  grow h-auto content-center text-center" ><p>3535345,3435</p><p>Downloads served</p></div>
         <div className="right-time border-l-1 border-l-white border-r-1 border-r-white  w-[30%] grow h-auto content-center text-center"><p>2 minutes ago</p><p>Last update check</p></div>
         <div className="right-time  w-[30%] grow h-auto content-center text-center"><p>43,490</p><p>Program versions listed</p></div>
      </div>
      <ContainerApp />
    </>
  )
}

export default App
