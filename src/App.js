import './App.css';
import PeoplesList from './peoples/peoples';
import CreatePerson from './peoples/createPerson';
import PeopleDetails from './peoples/peopleDetails';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import ErrorPage from './Error/ErrorPage';
import SortTable from './peoples/sortTable';

function App() {
  return (
    <div className="App">
      <Router>
      <ul className="nav">
      <li className="nav-item">
          <Link className="nav-link" to="/">Peoples</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create">Create Person</Link>
        </li>
        </ul>
        <Routes>
          <Route path="/" element={<SortTable />} />
          <Route path="/create" element={<CreatePerson />} />
          <Route path="/details/:id" element={<PeopleDetails />} />
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
