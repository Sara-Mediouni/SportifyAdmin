import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../Sidenav/Sidenav.css'
export default function ModifNews() {
  const [news, setnews] =useState([{id:0}]);
    const [titre, setTitre] =useState(null);
    const [description, setDescription] =useState(null);
    const [image, setImage] =useState(null);
    const [ordre, setOrdre] =useState(null);
    const { id } = useParams();
  
    const Imagehandler=(e)=>{
     
      setImage(e.target.files[0]);}
      const update=()=>{
          var formdata = new FormData();
          if (titre!==null)
         { formdata.append("Titre",titre);}
         if (description!==null)
          { formdata.append("Description",description);}
          if (image!==null)
            { formdata.append("Image",image);}
            if (ordre!==null)
              { formdata.append("Ordre",ordre);}
          
         
          var requestOptions = {
            method: 'PUT',
            body: formdata,
            redirect: 'follow'
          };
          
          fetch("http://localhost:3000/api/news/updatenews/"+id, requestOptions)
            .then(response => response.text())
            .then(result => {console.log(result)
            alert("actualité modifiée !")})
            .catch(error => console.log('error', error));
  }
  const defaultvalues=()=>{
    


    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:3000/api/news/shownews/"+id, requestOptions)
      .then(response => response.json())
      .then(result => {
        
     setnews(result)})
      .catch(error => console.log('error', error));
       }
       useEffect(() => {
        defaultvalues();
        
      
      },[]);
  return (
    <div id="wrapper">

                 
    
    <div id="content-wrapper" class="d-flex flex-column">

        <div id="content">


       
            <div class="container-fluid">


                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 title">Modfication d'une actualités</h1>

                </div>
               <div class="">
               <form onSubmit={(e)=>{e.preventDefault();update()}}style={{marginLeft:'10%',alignItems:'left'}}>

<div class="form-group ">
<label for="club">Titre</label>
<input type="text"defaultValue={news.Titre} class="form-control" id="club" aria-describedby="Help" placeholder="Entrer le titre"onChange={(e)=>setTitre(e.target.value)}/>

</div>
<div class="form-group ">
<label for="club">Description</label>
<textarea type="text" defaultValue={news.Description} class="form-control" id="club" aria-describedby="Help" placeholder="Entrer la description"onChange={(e)=>setDescription(e.target.value)}/>

</div>
<div class="form-group ">
    <label for="club">Ordre</label>
    <input pattern="[0-9]*" type="number" defaultValue={news.Ordre} class="form-control" id="club" aria-describedby="Help" placeholder="Entrer l'ordre'"onChange={(e)=>setOrdre(e.target.value)}/>
 
  </div>

<div class="form-group ">

<label for="exampleFormControlFile1">Image</label>
<input type="file" defaultValue={news.Image} class="form-control-file" id="exampleFormControlFile1"onChange={Imagehandler}/>

</div>


<div class="row" style={{marginTop:'170px'}}>
  <a href="/news"class="btn justify-content-center col-6" >Retour</a>
  <button type="submit" class="btn justify-content-center col-6" >Sauvegarder</button></div>
</form>
</div>

     




        </div>

    </div>
    <footer class="sticky-footer bg-white">
    
    </footer>

</div> 

</div >
)
}
