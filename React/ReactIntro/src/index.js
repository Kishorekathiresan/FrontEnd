import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TeamList from './components/TeamList';
import VenuesList from './components/VenuesList';
import reportWebVitals from './reportWebVitals';
import TeamDetailsWithUseState from './components/TeamDetailsWithUseState';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TeamList />
    <TeamDetailsWithUseState />
    <VenuesList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
