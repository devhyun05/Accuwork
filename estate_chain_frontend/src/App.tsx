import Dashboard from "pages/Dashboard";

import Welcome from "components/layouts/Welcome"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />

          <Route path="/:id" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
