import { Route, Switch } from 'react-router';
import './App.css';
import { FirstContext } from './Components/Context/cartContext';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import DetailPage from './Components/pages/DetailPage';
import Home from './Components/pages/Home';
import Menu from './Components/pages/Menu';


function App() {
  return (
    <>
      <FirstContext.Provider value=''>
        <Navbar/>
          <Switch>
            <Route  path='/menu/:id' component={DetailPage} />
            <Route path='/' exact component={Home} />
            <Route exact path='/menu' component={Menu} />
            <Route path='/about' exact component={About} />
            <Route path='/contact' exact component={Contact} />
          </Switch>
        <Footer/>
      </FirstContext.Provider>
    </>
  );
}

export default App;
