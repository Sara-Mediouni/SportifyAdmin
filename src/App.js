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
import Addnews from './components/Addpages/Addnews';
import AddEvents from './components/Addpages/AddEvents';
import EventsPage from './components/Lists/EventsPage';
import NewsPage from './components/Lists/NewsPage';
import ModifNews from './components/UpdatePages/ModifNews';
import ModifEvents from './components/UpdatePages/ModifEvents';


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
    <Route path="/modifevent/:id" element={<ModifEvents/>} exact />
    <Route path="/modifnews/:id" element={<ModifNews/>} exact />
    <Route path="/addevent" element={<Modifclub/>} exact />
    <Route path="/addnews" element={<AddEvents/>} exact />
    <Route path="/addevents" element={<Addnews/>} exact />
    <Route path="/news" element={<NewsPage/>} exact />
    <Route path="/events" element={<EventsPage/>} exact />
    <Route path="/users" element={<UsersPage/>} exact />
    <Route path="/" element={<Dashboard/>} exact />
    </Routes>
   
 
    </BrowserRouter>
  );
}

export default App;