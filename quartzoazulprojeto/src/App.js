import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import './css/style.css'
import './css/reset.css'
import './css/fontes.css'
import Home from './pages/Home';
import UserForm from './components/UserForm';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/userform" element={<UserForm />} /> 
          </Routes>
      </Router>
  );
}

export default App;