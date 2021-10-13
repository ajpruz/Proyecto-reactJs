import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Home from './Components/pages/Home';

function App() {
  return (
    <>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      <Footer/>
    </>
  );
}

export default App;
