import logo from './logo.svg';
import './App.css';
import Nav from './Components/Portfolio/Nav/Nav';
import About from './Components/Portfolio/About/About';
import Services from './Components/Portfolio/Services/Services';
import Projects from './Components/Portfolio/Projects/Projects';
import Contact from './Components/Portfolio/Contact/Contact';
import Footer from './Components/Portfolio/Footer/Footer';
// import Home from './Components/Portfolio/Home/Home';

function App() {
  return (
    <div>
      <Nav></Nav>
      {/* <Home></Home> */}
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>

    </div>
  );
}

export default App;
