
import { Routes, Route } from "react-router"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"

function App() {
  
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>

  )
}

export default App
