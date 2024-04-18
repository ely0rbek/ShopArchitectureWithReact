import { Routes, Route } from 'react-router-dom'
import Home from './components/home';
import Shop from './components/shop';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Header from './layouts/header';
import Footer from './layouts/footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='\' element={<Home />} />
        <Route path='\shop' element={<Shop />} />
        <Route path='\portfolio' element={<Portfolio />} />
        <Route path='\contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
