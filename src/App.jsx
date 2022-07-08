import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"

function App() {

  return (
    <div style={{height: '100%', display: 'flex',}}>
      <Sidebar/>
      <Home/>
    </div>
  )
}

export default App
