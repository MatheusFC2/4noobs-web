import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Routes";

function App() {

  return (
    <div style={{height: '100%', display: 'flex',}}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App;
