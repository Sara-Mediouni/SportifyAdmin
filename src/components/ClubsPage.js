import React from 'react'
import SideNav from './Sidenav'
import './Sidenav.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
export default function ClubsPage() {
  return (
    
    <div id="wrapper">

    <SideNav / >         

                <div id="content-wrapper" class="d-flex flex-column">
 
                    <div id="content">


                   
                        <div class="container-fluid">


                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 class="h3 mb-0 title">Liste des clubs</h1>

                            </div>
                           

                       

                            <div class="container-lg">
                            <form style={{marginLeft:'10%'}}>
        <div class="inner-form">
          <div class="basic-search">
            <div class="input-field">
              <input id="search" type="text" placeholder="Rechercher" />
              <div class="icon-wrap">
                <svg class="svg-inline--fa fa-search fa-w-16" fill="#ccc" aria-hidden="true" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="advance-search">
            <span class="desc">Filtre</span>
            <div class="row">
            <div class="input-field">
                <div class="input-select">
                  <select data-trigger="" class="form-select"name="choices-single-defaul"
                 >
                    <option placeholder="" value="">Id</option>
                    
                  </select>
                  
                </div>
                
              </div>
              <div class="input-field">
                <div class="input-select">
                  <select data-trigger="" class="form-select"name="choices-single-defaul"
                 >
                    <option placeholder="" value="">Nom</option>
                    
               
                  </select>
                  
                </div>
                
              </div>
              <div class="input-field">
                <div class="input-select">
                  <select data-trigger="" class="form-select"name="choices-single-defaul"
                 >
                    <option placeholder="" value="">Gouvernement</option>
                    <option value="2">Ariana</option>
                <option value="3">Béja</option>
                <option value="4">Ben Arous</option>
                <option value="5">Bizerte</option>
                <option value="6">Gabès</option>
                <option value="7">Gafsa</option>
                <option value="8">Jendouba</option>
                <option value="9">Kairouan</option>
                <option value="10">Kasserine</option>
                <option value="11">Kébili</option>
                <option value="12">Le Kef</option>
                <option value="13">Mahdia</option>
                <option value="14">La Manouba</option>
                <option value="15">Médenine</option>
                <option value="16">Monastir</option>
                <option value="17">Nabeul</option>
                <option value="18">Sfax</option>
                <option value="19">Sidi Bouzid</option>
                <option value="20">Siliana</option>
                <option value="21">Sousse</option>
                <option value="22">Tataouine</option>
                <option value="23">Tozeur</option>
                <option value="24">Tunis</option>
                <option value="25">Zaghouan</option>
                  </select>
                  
                </div>
                
              </div>
              <div class="input-field">
                <div class="input-select">
                  <select data-trigger=""  class="form-select"name="choices-single-defaul">
                    <option placeholder="" value="">Région</option>
                    <option>Subject b</option>
                    <option>Subject c</option>
                  </select>
                </div>
              </div>
            </div>
           
            <div class="row third">
              <div class="input-field">
                <div class="result-count">
                  <span>108 </span>résultats</div>
                <div class="group-btn">
                  <button class="btn-delete" id="delete">RESET</button>
                  <button class="btn-search">Rechercher</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    <div class="table-responsive">
      
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-10"></div>
                    <div class="col-sm-2">
<a style={{ marginLeft:'100px',fontSize:'50px',color:'#85D236'}}><AddIcon style={{ fontSize:'50px'}}/></a>
                    </div>
                </div>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Catégorie</th>
                        <th>Gouvernement</th>
                        <th>Adresse</th>
                        <th>Nom de l'entraîneur</th>
                        <th>Logo</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>Administration</td>
                        <td>(171) 555-2222</td>
                        <td>(171) 555-2222</td>
                        <td>(171) 555-2222</td>
                        <td>(171) 555-2222</td>
                        <td>(171) 555-2222</td>
                        <td>
                            <a class="add" title="Add" data-toggle="tooltip"></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><EditIcon/></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><DeleteIcon/></a>
                        </td>
                    </tr>
                      
                </tbody>
            </table>
        </div>
    </div>
</div>     



                    </div>

                </div>
                <footer class="sticky-footer bg-white">
                
                </footer>

            </div> 

    </div >
  )
}
