import { BrowserRouter } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import { Router } from "./routes/Routes"

function App() {

  return (
    <div style={{height: '100%', display: 'flex',}}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
