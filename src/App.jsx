import { Outlet } from "react-router-dom"

import Navbar from "./components/navbar/Navbar.jsx"
import Contact from "./components/contact/Contact.jsx"
import FullHeightContainer from "../src/components/FullHeightContainer/FullHeightContainer.jsx"

function App() {

  return (
    <div className="App">
      <FullHeightContainer />
      <Navbar />
      <Outlet />
      <Contact />
    </div>
  )
}

export default App
