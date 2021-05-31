import React from 'react';
import {Route,Switch } from 'react-router-dom';
import Create from './pages/Create.jsx';
import Login from './pages/Login';
import CategoryFiltered from './pages/CategoryFiltered';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

const Routes = ({memories,inputSearch,setMemories}) => {
    return (
        <Switch>
            {/*<Route exact path="/home" component={Home}/>*/}
            <Route path="/" exact>
               <Home memories={memories} inputSearch={inputSearch} setMemories={setMemories}/>
              </Route>
            <Route path="/category/:id">
                <CategoryFiltered memories={memories} inputSearch={inputSearch} setMemories={setMemories}/>
            </Route>
            <Route path="/favorites" >
               <Favorites memories={memories} inputSearch={inputSearch} setMemories={setMemories}/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path='/create'>
                <Create  setMemories={setMemories}/>
            </Route>

               
        </Switch>
    )

    }

    export default Routes;

