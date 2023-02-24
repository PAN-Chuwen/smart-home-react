import "./App.css"
import { Link, Route, Routes } from "react-router-dom"
import Rooms from "./Rooms"
import Home from "./Home"
import Bedroom from "./Bedroom"
import Header from "./Header"


function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>  
          </li>
          <li>
            <Link to="/rooms">link to rooms</Link>
          </li>
          <li>
            <Link to="/rooms/bedroom">link to bedroom</Link>
          </li>
        </ul>
      </nav>

    {/* routes */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/rooms" element={<Header></Header>}>
          <Route index element={<Rooms></Rooms>}></Route>
          <Route path="bedroom" element={<Bedroom></Bedroom>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
