import React, { useEffect } from 'react'
import Login from './Login'
import { Browse } from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../Utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';

function Body() {
    const dispatch = useDispatch()
    const appRouter = createBrowserRouter([
        {
          path : "/",
          element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        },
      ])

      useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
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
        } else {
            // User is signed out
            dispatch(removeUser())
        }
        });
      }, [])

    return (
        <div>
            <RouterProvider router = {appRouter}/>
        </div>
    )
}

export default Body
