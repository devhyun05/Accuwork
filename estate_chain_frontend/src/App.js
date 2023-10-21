import { Dashboard } from "./components/layouts/dashboard";
import { Landing } from "./components/layouts/landing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    </Router>
  );
}

export default App;
