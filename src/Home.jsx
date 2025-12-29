import house from './assets/home-blue.svg'

import Navbar from './Navbar'
function Home(){
    return(<>
  <Navbar />
  <div className="h1"><img src={house} className='logo m-3'/>Home Page</div>
  <div id="card">
  <p className='m-3'>In Search you can Get: </p>
  <ul>
    <li>Type The Movie Name </li>
    <li>Hit The Search Button</li>
    <li>Get Detailed Info About The Movie</li>
  </ul>
  <p className='m-3'> In About you can Get:</p>
  <ul>
    <li>About The App</li>
    <li>Get Detailed info that what are the details can get about movie</li>
  </ul>
</div>

    </>)
}
export default Home