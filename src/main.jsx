import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from "./App.jsx"

import Home from "./components/pages/home/Home.jsx"
import About from "./components/pages/about/About.jsx"
import Services from "./components/pages/services/Services.jsx"

import "./index.css"
// ... imports ...
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        >
          {/* Adicione o Outlet para renderizar os componentes filhos */}
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

