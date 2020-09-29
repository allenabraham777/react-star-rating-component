import React, { useState } from 'react'
import StarComponent from './components/Star'

const App = () => {
  const [star, setStar] = useState(0)
  const center = {
    display: "flex",
    width: "center",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "50px"
  }
  return (
    <div style={center}>
      <div>
        Rating : {star}
      </div>
      <div>
        <StarComponent star={star} setStar={setStar}/>
      </div>
    </div>
  )
}

export default App
