import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../Utils/firebase'
import { addUser, removeUser } from '../redux/userSlice';
import { NETFLIX_LOGO } from '../Utils/constants';
import { changeSearchAction } from '../redux/gptSlice';
import {language} from '../Utils/language'
import { changeLanguage } from '../redux/configSlice';


function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const gptSearch = useSelector(store => store.gptSearch)
    const user = useSelector(store => store.user)

    useEffect(()=>{
        const unsubscibe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            // const uid = user.uid;
            const {uid, email, displayName} = user
            dispatch(
                addUser({
                    uid :uid, 
                    email : email, 
                    displayName : displayName
                }))
                navigate("/browse")
        } else {
            // User is signed out
            dispatch(removeUser())
            navigate("/")
        }
        });
        return () => unsubscibe()
      }, [])
    
    const handleSignOut = () => {

        signOut(auth).then(() => {
            dispatch(removeUser())
          }).catch((error) => {
            // An error happened.
            
          });
    }

    const handleGptSearch = () => {
        dispatch(changeSearchAction())
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    return (
        // <div className='flex justify-between'>
            <div className='w-full flex flex-col md:flex-row  fixed justify-between  z-10  bg-gradient-to-b  from-black '>
                <img src = {NETFLIX_LOGO}
                alt='netflix-logo'
                className='md:w-48 md:mx-6 my-1  sm:w-32 sm:mx-6 w-32 m-auto ' />
                {user && <div className='m-auto sm:m-0 md:m-0'>
                    {gptSearch.search &&
                    <select className='bg-red-700 text-white p-2 m-3 rounded-md bg-opacity-5 border-0 font-bold' onChange={handleLanguageChange}>
                        
                    {language.map((lan) => 
                    <option
                        value={lan.value} className='bg-red-500 text-white'>
                        
                        {lan.lang}
                    </option>
                    
                    )}
                    </select>}
                    {/* <FontAwesomeIcon icon={faGlobe}  size="sm" style={{color: 'white',}} /> */}
                    <button onClick={handleGptSearch} className='bg-red-700 text-white p-2 m-3 rounded-md bg-opacity-5 font-bold'>{gptSearch.search ? 'Home' : 'Search'}</button>
                     <button onClick={handleSignOut} className='bg-red-700 text-white p-2 m-3 rounded-md bg-opacity-5 font-bold'>SignOut</button>
                     {/* <p className='text-white'>{user.displayName}</p> */}
                </div>}
            </div>
    )
}

export default Header














//shiva.el.intrepido