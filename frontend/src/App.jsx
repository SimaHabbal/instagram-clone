import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
