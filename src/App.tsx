import { useState } from 'react'
import NewConponent from './component/newConponent'
import "./App.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <NewConponent/>
    </>
  )
}

export default App
