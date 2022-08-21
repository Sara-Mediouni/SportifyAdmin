import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";

import ClubsPage from './components/Lists/ClubsPage';
import Addclub from './components/Addpages/Addclub';
import Modifclub from './components/UpdatePages/Modifclub';
import SideNav from './components/Sidenav/Sidenav';
import UsersPage from './components/users/users';
import Dashboard from './components/Dashboard/Dashbord';
import AddSalle from './components/Addpages/AddSalle';
import SallePage from './components/Lists/SallesPage';
import Modifsalle from './components/UpdatePages/Modifsalles';
import Ajoutnews from './components/Addpages/Ajoutnews';
import AjoutEvents from './components/Addpages/AjoutEvents';


function App() {
  return (
    <BrowserRouter >
    
    <SideNav/>
    {/* Route components would be visible only at their route */}
    <Routes>
   
    <Route path="/clubs" element={<ClubsPage/>} exact />
    <Route path="/salles" element={<SallePage/>} exact />
    <Route path="/addclubs" element={<Addclub/>} exact />
    <Route path="/modifclub/:id" element={<Modifclub/>} exact />
    <Route path="/modifsalles" element={<Modifsalle/>} exact />
    <Route path="/addsalles" element={<AddSalle/>} exact />
    <Route path="/news" element={<Ajoutnews/>} exact />
    <Route path="/events" element={<AjoutEvents/>} exact />
    <Route path="/users" element={<UsersPage/>} exact />
    <Route path="/" element={<Dashboard/>} exact />
    </Routes>
   
 
    </BrowserRouter>
  );
}

export default App;