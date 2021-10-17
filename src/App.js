
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navigationbar from './Components/Navbar/Navigationbar';
import MainBody from './Components/Main/MainBody';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import HealthPackageDetail from './Components/Main/HealthPackageDetail';
import Notfound from './Components/Notfound/Notfound';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';

function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
      <Navigationbar/>
      <Switch>
        <Route exact path='/'>
          <MainBody/>
        </Route>
        <Route exact path='/home'>
          <MainBody/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/logIn'>
          <Login/>
        </Route>
        <Route path='/signUp'>
          <Signup/>
        </Route>
        <Route path='/services'>
          <Services/>
        </Route>
        <Route path="/home/healthPackage/:healthID">
           <HealthPackageDetail/>
        </Route>
       
        <Route path="*">
           <Notfound/>
        </Route>
      </Switch>
     
      <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
