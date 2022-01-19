
import './App.css';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom'
import Homepage from './Pages/Home/Homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Pages/NotFound/NotFound';
import { Header } from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
 import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Contact from './Pages/Contact/Contact';
import Details from './Pages/Details/Details/Details';
import Booking from './Pages/Booking/Booking';
import Footer from './Pages/Home/Footer/Footer';



function App() {
  return (
   <div>
    
     <AuthProvider>
     <Router>
        <Header></Header> 
       <Switch>
         <Route exact path='/'><Homepage /></Route>
         <Route exact path='/home'><Homepage /></Route>
         <Route exact path='/login'><Login />
         </Route>
         <PrivateRoute exact path='/contact'><Contact /></PrivateRoute> 
         
         <PrivateRoute exact path='/details/:detailId'><Details />
         </PrivateRoute>
       
         <PrivateRoute exact path='/details/1'><Details />
         </PrivateRoute>
       
         <PrivateRoute exact path='/appointment'><Booking /></PrivateRoute> 
          
         <Route exact path='*'><NotFound /></Route>
       
       </Switch>
      
      
     </Router> 
     </AuthProvider>
    
    
   </div>
  )
}

export default App;
