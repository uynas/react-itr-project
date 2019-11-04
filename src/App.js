import React,{ Component } from 'react';
import './App.css';
import Menu from "./components/MainPanel/MainMenu";
import 'bootstrap/dist/css/bootstrap.min.css'
import Page from "./components/Page/Page"
 const App = (props)=> {
    return(<div>
            <Menu/>
           <Page/>
            </div>
        );

}
export default App;

