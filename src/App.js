import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Reviews from './Component/Reviews/Reviews';
import Dashboard from './Component/Dashboard/Dashboard';
import Blogs from './Component/Blogs/Blogs';
import About from './Component/About/About';
import NotFound from './Component/NotFound/NotFound';
import Home2 from './Component/Home2/Home2';


function App() {
  return (
    <div className="App">
      <Home></Home>

      {/* <Home2></Home2> */}
      <Routes>
        <Route path="/home2" element={<Home2></Home2>} />
        <Route path="/reviews" element={<Reviews></Reviews>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/about" element={<About></About>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>

    </div>

  );
}

export default App;
