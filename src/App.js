import { Routes, Route } from 'react-router-dom'
import Header from './layouts/header';
import Footer from './layouts/footer';
import Login from './components/login';
import Register from './components/register';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path='\' element={<Home />} />
        <Route path='\shop' element={<Shop />} />
        <Route path='\portfolio' element={<Portfolio />} />
        <Route path='\contact' element={<Contact />} /> */}
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
