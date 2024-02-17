import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./footer.jsx";
import Header from "./header";
import Home from "./home";
import Login from "./login.jsx";
import Product1 from "./product1.jsx";
import Product2 from "./product2.jsx";
import Product3 from "./product3.jsx";
import ProjectSuggestion from "./projectSuggestion.jsx";
import Signup from "./signup.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/1" element={<Product1 />} />
          <Route path="/product/2" element={<Product2 />} />
          <Route path="/product/3" element={<Product3 />} />
          <Route path="/product/4" element={<Product3 />} />
          <Route path="/product/5" element={<Product3 />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Routes>
        <Route path="/projectSuggestion" element={<ProjectSuggestion />} />
      </Routes>
      <br></br><br></br><br></br><br></br>
      <Footer />
    </Router>

}

export default App;
