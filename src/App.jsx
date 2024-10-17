import Draggable from 'react-draggable'
import './App.css'

function App() {
  return (
    <div className="App">
      <Draggable
        handle=".handle"
      >
        <div>
          <div className="handle">Drag here</div>
          <div className="box">Drag me around</div>
        </div>
      </Draggable>
    </div>
  )
}

export default App
