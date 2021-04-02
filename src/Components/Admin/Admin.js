import React from 'react';
import AddGuitarInfo from '../AddGuitarInfo/AddGuitarInfo'
import './Admin.css';
import ManageGuitars from '../ManageGuitars/ManageGuitars'
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BlurLinearIcon from '@material-ui/icons/BlurLinear';



const Admin = () => {

    return (
        <div className="main-container" >
            
            <Router>
                
                <div className="menubar">
                   <Link className="menu-items" to="/addguitar" ><AddIcon/> Add Guitar</Link>
                   <Link className="menu-items" to="/manageguitars" ><BlurLinearIcon/> Manage Guitar</Link>
                   <Link className="menu-items" to="/editguitar"><EditIcon/> Edit Guitar</Link>
                   </div>
                
                <Switch>
                <Route path="/admin">
                        <AddGuitarInfo></AddGuitarInfo>
                    </Route>
                    <PrivateRoute  path="/addguitar">
                        <AddGuitarInfo></AddGuitarInfo>
                    </PrivateRoute>
                    <PrivateRoute path="/manageguitars">
                        <ManageGuitars></ManageGuitars>
                    </PrivateRoute>
                    <PrivateRoute path="/editguitar">
                        <h4 className="edit-guitar-text" >Coming Soon...</h4>
                    </PrivateRoute>
                    
                </Switch>

            </Router>
            <div>

            </div>

            <div>

            </div>

        </div>
    );
};


export default Admin;