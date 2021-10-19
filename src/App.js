
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './pages/Header/Header';
import About from './pages/About/About';
import News from './pages/News/News';
import NotFound from './pages/NotFound/Notfound';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Services from './pages/Services/Services';
import PrivetRoute from './components/Shared/PrivateRoute/PrivateRoute';
import Login from './components/Shared/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Router>
    <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
        <About></About>
        </Route>
        <Route path="/services">
        <Services></Services>
        </Route>
        <PrivetRoute
        path="/bookService/:id">
         <ServiceDetail></ServiceDetail>
        </PrivetRoute>
        <Route path="/news">
          <News></News>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/register">
       <Register></Register>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
