import Dashboard from 'components/layouts/Dashboard';
import Landing from 'components/layouts/Landing';
import WorkExperience from 'components/layouts/Workexperience';
import Search from 'components/layouts/Search';
import Share from 'components/layouts/Share';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div>
    <Router>
      <Routes>

        <Route path="/" element={<Landing/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/share" element={<Share/>}/> 
        <Route path="/workexperience" element={<WorkExperience/>}/>
        <Route path="/search" element={<Search/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
