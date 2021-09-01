import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "../parts/navbar";
import Home from "../Pages/home";
import AddContact from "../Pages/addContact";
import EditContact from "../Pages/editContact";
import ContactUser from "../Pages/contactUser";
import Button from '../Components/Button';

const noPage = () => {
    return (
        <div className="container" style={{color: "red"}}>
            <h1 >No Page !!!</h1>
            <Button type="link" href="/" className="red-text">Back to home</Button>
        </div>
    )
}

 function routerPage() {
    return (
        <Router>
                <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/add-contact" component={AddContact} />
                <Route path="/edit-contact/:id" component={EditContact} />
                <Route path="/contact/:id" component={ContactUser} />
                <Route path="*" component={noPage} />
            </Switch>
        </Router>
    )
}
export default routerPage;