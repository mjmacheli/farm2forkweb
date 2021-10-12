import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
} from "react-router-dom";

import Navigation from './components/Navigation';
import ProjectProposal from './pages/ProjectsProposals';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="App">
       <Router>
         <div>
         <Navigation />
          <Route path="/" exact component={Welcome} />
          <Route path="/proposals" exact component={ProjectProposal}/>
         </div>
       </Router>
    </div>
  );
}

export default App;
