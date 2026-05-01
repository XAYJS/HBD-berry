import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './page/home.tsx'
import { Second} from './page/Second.tsx'
import { Third } from './page/Third.tsx'
import './App.css'

function App() {
 

  return (
    <>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/second" element={<Second />} />
  <Route path="/third" element={<Third />} />
</Routes>
    </>
  )
}

export default App
