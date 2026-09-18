import GenreMovies from "./GenreMovies"
import Search from "./Search"
import Trending from "./Trending"
import Notfound from "./Notfound"
import Navbar from './Navbar'
import Detailer from "./Detailer"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

function App(){


  const router=createBrowserRouter(
    [{element:<Trending />, path:"/" },
  {element: <Search />,path:"/Search"},
  {element:<GenreMovies/>,path:"/GenreMovies"},
  {element:<Notfound/>,path:"*"},
  {element:<Navbar/>,path:"/Navbar"},
  {element:<Detailer/>,path:"/Detailer/:imdbId"}])
  return(<>
      <div>
        <RouterProvider router={router}/>
      </div>
     
         </>)
}
export default App