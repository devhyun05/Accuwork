import { Dashboard } from "./components/layouts/dashboard";
import { Landing } from "./components/layouts/landing";
import { WorkExperience } from "./components/layouts/workexperience";
import { Search } from "./components/layouts/search";

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
        <Route path="/workexperience" element={<WorkExperience/>}/>
        <Route path="/search" element={<Search/>}/>
        </Routes>
    </Router>
  );
}

export default App;
