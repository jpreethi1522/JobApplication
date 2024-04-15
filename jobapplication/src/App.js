import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ViewDetails from './ViewDetails'; // Import ViewDetails component
import Apply from './Apply';
import ThankYouPage from './ThankYouPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/ViewDetails" element={<ViewDetails />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/ThankYouPage" element={<ThankYouPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
