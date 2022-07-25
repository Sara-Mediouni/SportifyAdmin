import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";

import ClubsPage from './components/ClubsPage';

function App() {
  return (
    <BrowserRouter >
    
   
    {/* Route components would be visible only at their route */}
    <Routes>
   
    <Route path="/clubs" element={<ClubsPage/>} exact />
    </Routes>
   
 
    </BrowserRouter>
  );
}

export default App;