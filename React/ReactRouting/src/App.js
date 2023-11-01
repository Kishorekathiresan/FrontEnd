import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import VenuesList from './components/VenuesList';
import TeamList from './components/TeamList';
import TeamDetails from './components/TeamDetails';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
      </header><span style={{left:10,width:200,height:300}}>
    <Link to="/VenuesList">List of Venues</Link><br></br></span>
    <span style={{left:10,width:200,height:300}}>
      <Link to="/TeamList">List of Teams</Link><br></br></span>
      <span style={{left:10,width:200,height:300}}>
      <Link to="/TeamDetails">Details of team</Link><br></br></span>
    <Routes>
      <Route exact path='/VenuesList' element={<VenuesList />}></Route>
      <Route exact path='/TeamList' element={<TeamList />}></Route>
      <Route exact path='/TeamDetails' element={<TeamDetails />}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
