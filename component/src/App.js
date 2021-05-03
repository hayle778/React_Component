

import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
//import MenuComponent from './component/MenuComponent'  // .....release it once you figure out how you import it
//import DishdetailComponent from './component/DishdetailComponent'// ... release it once you figure out how you import it


//import { Component } from 'react';
//import  DishdetailComponent from'./App/DishdetailComponent'
class  App  extends  React.Component{
// changeing it from function App() to render()
render() {
  return (

    
    
    <div className="App">
 

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         
          <code>Food Menu</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Donut, Pizza, CheeseCake, Injera
        </a>
        <view style = {Styles. container}>
<Image 
style ={{width:150, height:150}}


// check the image source

source = {require{'BigCo Inc. logo'}}




    </view>
    
    
      
      
      </header>
   
    </div>
  );
}
}
export default App;
