import React from 'react';
import {Route , Switch } from 'react-router-dom'; 

//Componentes
import App from './App';
import About from './Components/About';
//import Contact from './Components/Contact';
import Home from './Components/Home/index';
import Page404 from './Components/Page404';
const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/about" component={About}/>
        <Route exact path="/" render={()=>{
					return (<Home/>)
				}}/>
        <Route component={Page404}/>
        
   </Switch>
</App>;

export default AppRoutes;