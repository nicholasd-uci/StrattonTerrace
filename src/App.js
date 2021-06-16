import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Solutions from './Pages/Solutions/Solutions'
import Mission from './Pages/Mission/Mission'
import Services from './Components/Services/Services'


function App() {
  return (
       <div  className='App'
    >
    <Router>
      <Header />
      <div className='App__background'>
  <Services />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/solutions' exact component={Solutions} />
        <Route path='/mission' exact component={Mission} />
      </Switch>
      </div>
      <Footer />
    </Router>
    </div>
  );
    }

export default App;
