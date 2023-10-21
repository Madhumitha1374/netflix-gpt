import React from 'react'
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import {auth} from '../Utils/firebase'

function Header() {
    // const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    console.log(user, "****")
    const navigate = useNavigate()
    const handleSignOut = () => {

        signOut(auth).then(() => {
            navigate("/")
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        // <div className='flex justify-between'>
            <div className='w-full flex justify-between absolute z-10  bg-gradient-to-b  from-black'>
                <img src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt='netflix-logo'
                className='w-48 mx-6 my-1'/>
                {user && <div>
                     <button onClick={handleSignOut} className='bg-red-700 text-white p-3 m-3 rounded-md'>SignOut</button>
                     <p>{user.displayName}</p>
                </div>}
            </div>
    )
}

export default Header
