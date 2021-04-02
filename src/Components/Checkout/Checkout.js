import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {userContext} from '../../App';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
const Checkout = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext);
    const { model, id } = useParams();
    const classes = useStyles();
    const [guitars, setGuitars] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5059/guitars`;
        fetch(url)
            .then(res => res.json())
            .then(data => setGuitars(data))
    }, [id])
    const singleData = guitars.find(guitar => guitar._id === id)
    // const newSingleData = {...singleData};
    // newSingleData.date=new Date();
    //     console.log(newSingleData);
    const handleCheckOut=()=>{
        singleData.buyDate = new Date().toDateString();
        const userOrder ={email:loggedInUser.email,singleData};
        console.log(loggedInUser.email);
        // console.log({items: singleData})
        console.log('checkout cliked')
        fetch(`http://localhost:5059/addOrder`,{
            method: 'POST',
             headers: {
              'Content-Type': 'application/json'
          },
            body: JSON.stringify(userOrder),
        })
        .then(res =>res.json())
        .then(data=>{
            if(data){
                alert('Order success!');
            }
        });
        
    };
    // const {price,brandName} = singleData;
    return (
        <div>
            <h4 style={{textAlign:'center',padding:'10px'}}>Your Items</h4>
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


                        <TableRow >
                            <TableCell component="th" scope="row">
                               {model}
                            </TableCell>
                            <TableCell align="right">{singleData &&singleData.brandName}</TableCell>
                            <TableCell align="right">{singleData &&singleData.price}</TableCell>
                            <TableCell align="right"><Button onClick={()=>{handleCheckOut()}} variant="outlined" color="secondary">
                                Checkout
                            </Button></TableCell>

                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Checkout;