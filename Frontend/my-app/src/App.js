import './App.css';
import Navbar from './Components/Navbar/Navbar'; 
import Footer from './Components/Footer/Footer';
import DisplayProduct from './Components/DisplayProduct';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ height: "80vh" }}></div>
      {/*<DisplayProduct/>*/}
      <Footer />
    </div>
  );
}

export default App;
