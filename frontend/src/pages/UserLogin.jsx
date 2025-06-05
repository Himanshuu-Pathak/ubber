import React,{useState} from 'react'
import Formls from '../component/common/Formls'
import { UserDataContext } from '../Context/UserContext'



const UserLogin = () => {
  const [user, setUser] = useState(null);
 
  return (
    <div className='w-full h-screen '>
      <UserDataContext.Provider value={{user, setUser}}>
            <Formls />
        </UserDataContext.Provider>
      
    </div>
  )
}

export default UserLogin
