import {
  BrowserRouter as Router,
  Route,
  useHistory,
} from "react-router-dom";

import Loginpage from "./pages/LoginPage";
import ProjectProposal from './pages/ProjectsProposals';
import Welcome from './pages/Welcome';

function App() {

  

  return (
    <div className="App">
       <Router>
         <div>
          <Route path="/" exact component={Loginpage} />
          <Route path="/welcome" exact component={Welcome} />
          <Route path="/proposals" exact component={ProjectProposal}/>
         </div>
       </Router>
    </div>
  );
}

export default App;
