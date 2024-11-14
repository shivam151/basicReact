import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    < UserContextProvider>
    <div className='text-center bg-black text-white'>

   
      <h1  >This is react project</h1>
      <Login/>
      <Profile/>

    </div>  
    </UserContextProvider>
  )
}

export default App
