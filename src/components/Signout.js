import React from 'react'
import { auth } from '../firebase'

function Signout() {
    function signOut(){
        signOut(auth)
    }
  return (
   <button onClick={()=>auth.signOut()} className='bg-gray-200 px-4 py-2 hover:bg-gray-100'>Logout</button>
  )
}

export default Signout