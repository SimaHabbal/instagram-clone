import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/siginin/signin';
import Signup from './pages/signup/signup';
import Home from './pages/Home/home';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={ <Signin/>} />
          <Route path="/signup" element={ <Signup/> } />
          <Route path="/home" element={ <Home/> } />
        </Routes>
    </Router>
  );
}

export default App;
