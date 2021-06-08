import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import TM from './Assets/Logo/Theme.jpg'
import Theme from './Components/Theme/Theme';
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Solutions from './Pages/Solutions/Solutions'
import Vision from './Pages/Vision/Vision'


function App() {
  return (
       <div style={{
      backgroundImage: `url(${TM})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
    <Router>
      <Header />
  <Theme />
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/solutions' exact component={Solutions} />
        <Route path='/vision' exact component={Vision} />
      </Switch>
      <Footer />
    </Router>
    </div>
  );
    }

export default App;
