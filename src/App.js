import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Solutions from './Pages/Solutions/Solutions'
import Mission from './Pages/Mission/Mission'
import Services from './Components/Services/Services'
import Website from './SubPages/Website/Website'
import ADS from './SubPages/ADS/ADS'
import Ecommerce from './SubPages/Ecommerce/Ecommerce'
import Hosting from './SubPages/Hosting/Hosting'
import Nonprofit from './SubPages/Nonprofit/Nonprofit'
import Orm from './SubPages/Orm/Orm'
import Seo from './SubPages/Seo/Seo'
import Social from './SubPages/Social/Social'


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
        <Route path='/ADS' exact component={ADS} />
        <Route path='/ecommerce' exact component={Ecommerce} />
        <Route path='/hosting' exact component={Hosting} />
        <Route path='/nonprofit' exact component={Nonprofit} />
        <Route path='/orm' exact component={Orm} />
        <Route path='/seo' exact component={Seo} />
        <Route path='/social' exact component={Social} />
        <Route path='/website' exact component={Website} />
      
      </Switch>
      </div>
      <Footer />
    </Router>
    </div>
  );
    }

export default App;
