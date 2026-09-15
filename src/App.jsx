import About from "./About"
import Search from "./Search"
import Home from "./Home"
import Notfound from "./Notfound"
import Navbar from './Navbar'
import Detailer from "./Detailer"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { useState } from 'react';
function App(){

var [mode,setMode]=useState("dark");
function lightmode(){
    mode= setMode("light")
} 
function darkmode(){
   mode= setMode("dark")
}   
  const router=createBrowserRouter(
    [{element:<Home/>, path:"/" },
  {element: <Search />,path:"/Search"},
  {element:<About/>,path:"/About"},
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