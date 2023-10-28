import Dashboard from "pages/Dashboard";
import Navbar from "components/layouts/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Landing() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#2c3e50",
          flexDirection: "column",
          color: "white",
        }}
      >
        Landing Page coming soon...
      </div>
    </div>
  );
}
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/:id" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
