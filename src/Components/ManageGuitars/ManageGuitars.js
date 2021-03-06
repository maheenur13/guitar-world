import React,{ useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './ManageGuitars.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Spinner from '../Spinner/Spinner';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const ManageGuitars = () => {
  const history = useHistory();
    const classes = useStyles();
    const [guitars,setGuitars]= useState([]);
    useEffect(() =>{
        const url =`https://cherry-pudding-75552.herokuapp.com/guitars`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setGuitars(data))
    },[])


    const deleteProduct= (id,e) => {
        console.log('iddd',id)
        fetch(`https://cherry-pudding-75552.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            console.log('deleted successfully');
            if(result){
             history.push('/addguitar');
             history.push('/manageguitars');
                console.log(e.target)
            }
        })
    }
    const editHandler =()=>{
      alert('coming soon...');
    }
    return (
        <div style={{marginRight:'180px',marginTop:'40px'}} className="container">
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Guitar Model</strong></TableCell>
            <TableCell align="right"><strong>Brand</strong></TableCell>
            <TableCell align="right"><strong>Price</strong></TableCell>
            <TableCell align="right"><strong>Action</strong></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
           
          {guitars.map((guitar) => (
            <TableRow id="tablerow" >
              <TableCell component="th" scope="row">
                {guitar.model}
              </TableCell>
              <TableCell align="right">{guitar.brandName}</TableCell>
              <TableCell align="right">{guitar.price}$</TableCell>
              <TableCell align="right"><EditIcon className="delete-btn-deign" onClick={()=>editHandler()}  /> <DeleteIcon className="delete-btn-deign" onClick={(e)=>deleteProduct(guitar._id,e)}/></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {
                guitars.length===0 && <div style={{marginLeft:'440px'}}>
                    <h5>Loading...</h5>
                     <Spinner  />
                </div>
            }
        </div>
    );
};

export default ManageGuitars;