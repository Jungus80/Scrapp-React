import { Routes , Route} from "react-router-dom"
import { LoginPage } from "./views/Login"



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app">
    <Routes>
      <Route path='/' element= {<LoginPage/>}/>
    </Routes>
    </div>
  )
}

export default App
