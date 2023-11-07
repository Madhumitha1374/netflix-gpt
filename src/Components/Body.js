import Login from './Login'
import { Browse } from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Intro } from './Intro'

function Body() {
    const appRouter = createBrowserRouter([
        {
          path : "/",
          element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        },
        {
            path : "/intro",
            element : <Intro/>
        },
      ])

    return (
        <div>
            <RouterProvider router = {appRouter}/>
        </div>
    )
}

export default Body
