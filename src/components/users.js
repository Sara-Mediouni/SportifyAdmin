import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import './Sidenav.css'
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 180,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 180,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 180,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 180,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'k@gmail.com' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', email:'k@gmail.com' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'k@gmail.com' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'k@gmail.com' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email:'k@gmail.com' },
  { id: 6, lastName: 'Melisandre', firstName: null, email: 'k@gmail.com' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'k@gmail.com' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'k@gmail.com' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'k@gmail.com' },
];

export default function DataGridDemo() {
  return (
    <div id="wrapper">

           

    <div id="content-wrapper" class="d-flex flex-column">

        <div id="content">


       
            <div class="container-fluid">


                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 title">Liste des utilisateurs</h1>

                </div>
               

           

                <div class="container-lg">
                <Box sx={{ width: '80%',height:'600px',padding:'5rem'}}>
     
     <DataGrid
       rows={rows}
       columns={columns}
       pageSize={5}
       rowsPerPageOptions={[5]}
       checkboxSelection
       disableSelectionOnClick
       experimentalFeatures={{ newEditingApi: true }}
     />
     </Box>
                </div>
    </div>
</div>     



                    </div>

                </div>
                

          

    
  );
}
