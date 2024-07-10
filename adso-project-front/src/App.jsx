import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import './index.css';

export default function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="/login" Component={Login} />
        </Routes>
    </Router>
  )
}
