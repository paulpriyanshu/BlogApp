import React from 'react'
import { logout } from '../../store/authslice'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
function Logoutbutton() {
  const dispatch=useDispatch()

  const logouthandler=()=>{
    authService.logout().then(()=>{
        dispatch(logout())
    })
   
  }
    return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logouthandler}>
            Logout
    </button>
  )
}

export default Logoutbutton
