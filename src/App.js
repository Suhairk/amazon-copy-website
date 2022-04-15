import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignOption from './components/SignOption';// in new version swich replaced by Routes
import SideBar from './components/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path='/home' exact element = {   <HomeScreen/>}></Route>
        </Routes>
      </Router>
        */}
      <Router>
        <Routes>
        <Route path='/' element = { <HomeScreen/>}/>
          <Route path='/all' element = {<SideBar/>}/>
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
