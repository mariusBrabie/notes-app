import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react';
import AddForm from '../components/AddForm'
import EditForm from '../components/EditForm'
import Container from '../components/Container'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => <BrowserRouter>
    <Header />  
    <Switch>
        <Route path="/" component={Container} exact={true} />
        <Route path="/add" component={AddForm} />
        <Route path="/edit/:id/:timestamp" component={EditForm} />
        <Route component={NotFoundPage} />
    </Switch>
</BrowserRouter>
export default AppRouter;