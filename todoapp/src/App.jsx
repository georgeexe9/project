import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Navbar.jsx';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
