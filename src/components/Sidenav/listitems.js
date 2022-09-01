import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';

import PeopleIcon from '@mui/icons-material/People';

import SettingsIcon from '@mui/icons-material/Settings';
import {MdEmojiEvents} from 'react-icons/md'
import {BiNews} from 'react-icons/bi';
import RoomIcon from '@mui/icons-material/Room';
import {SiClubhouse} from 'react-icons/si';
import './Sidenav.css'
export const mainListItems = (
  <div class='body'>
    <ListItem style={{marginBottom:'30px'}}button onClick={() => {
      window.location.href="/"
    }}>
      <ListItemIcon style={{color:"#fff"}}>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText style={{color:"#fff"}}primary="Dashboard" />
    </ListItem>
    <ListItem style={{marginBottom:'30px'}} button onClick={() => {
      window.location.href="/clubs"
    }}>
      <ListItemIcon style={{color:"#fff",fontSize:"20px"}}>
        <SiClubhouse />
      </ListItemIcon>
      <ListItemText style={{color:"#fff"}} primary="Clubs" />
    </ListItem>
    <ListItem style={{marginBottom:'30px'}} button onClick={() => {
      window.location.href="/salles"
    }}>
      <ListItemIcon style={{color:"#fff"}}>
        <RoomIcon />
      </ListItemIcon>
      <ListItemText style={{color:"#fff"}}primary="Salles" />
    </ListItem>
    <ListItem style={{marginBottom:'30px'}} button onClick={() => {
      window.location.href="/users"
    }}>
      <ListItemIcon style={{color:"#fff"}}>
      <PeopleIcon />
      </ListItemIcon>
      <ListItemText style={{color:"#fff"}} primary="Utilisateurs" />
    </ListItem>
    <ListItem style={{marginBottom:'30px'}} button onClick={() => {
      window.location.href="/news"
    }}>
      <ListItemIcon style={{color:"#fff",fontSize:"20px"}}>
        <BiNews />
      </ListItemIcon>
      <ListItemText style={{color:"#fff"}}primary="Actualités" />
      
    </ListItem>
    <ListItem style={{marginBottom:'30px'}} button onClick={() => {
      window.location.href="/events"
    }}>
      <ListItemIcon style={{color:"#fff",fontSize:"20px"}}>
        <MdEmojiEvents />
      </ListItemIcon>
      <ListItemText style={{color:"#fff"}}primary="Evènements" />
      
    </ListItem>
    <ListItem style={{marginBottom:'30px'}}button onClick={() => {
      window.location.href="/vehicules/parking/list"
    }}>
      <ListItemIcon style={{color:"#fff"}}>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText style={{color:"#fff"}}primary="Paramètres" />
      
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
   
  
  </div>
);