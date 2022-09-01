import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Assets/Title';
import axios from 'axios';
export default function Clubssection() {
  const [clubs, setClubs] = React.useState([{id: 0}]);
  const show=()=>{
    axios.get("http://localhost:3000/api/club/")
     .then(response => {
       const clubs = response.data;
       setClubs(clubs)
     })
}
useEffect(() => {
  show();
  console.log(clubs)

});

  return (
    <div >
                                
    
    <Title >Clubs </Title>
    <Table size="small">
      <TableHead>
        <TableRow>
       
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Nom</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Adresse</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Région</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Gouvernement</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Entraîneur</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Catégorie</TableCell>
        </TableRow>
          
      </TableHead>
      <TableBody>
        
     {clubs.slice(0,4).map((c)=>{
      return(  
       <TableRow >
      <TableCell>{c.Nom_club}</TableCell>
      <TableCell>{c.Emplacement}</TableCell>
      <TableCell>{c.Region}</TableCell>
      <TableCell>{c.Gouvernement}</TableCell>
      <TableCell>{c.Nom_entren}</TableCell>
      <TableCell>{c.Activite}</TableCell>
      </TableRow>)
    
     })} 
        
      
          
        
      </TableBody>
    </Table>
    <a class="linkplus" href="/clubs">Plus</a>
    
   
   
  
  </div>
  )
}
