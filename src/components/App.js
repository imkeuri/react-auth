import Signup from './signup/Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Login from './login/login'
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './signup/ForgotPassword';




function App() {
  return (

    <Container className="d-flex align-items-center 
    justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route element={<PrivateRoute />}><Route path='/' element={<Dashboard/>}/></Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path='/forgot-password' element={<ForgotPassword/>}/>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>



  );
}

export default App;
