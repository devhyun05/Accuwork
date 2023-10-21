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
        </Routes>
    </Router>
  );
}

export default App;
