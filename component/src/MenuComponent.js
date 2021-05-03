//import logo from './logo.svg';

import React,  {Component} from 'react'
//import  DishDetail from  './component/DishdetailComponent';

class MenuComponent  extends Component{

    constructor(){
        super()
        this.state = {
           
           MenuComponent: 'This is the type of Dishes we have'
        
        }
        
        }
    render(){

        return(
        <div>
        <h1>
           
           MenuComponent
           <button>Donut</button>
<button> Pizza</button>
<button>Cheese</button>
<button>Injera </button>
            </h1>
        </div>
        )
        
             
            }
        }
        
    
      
        export  default MenuComponent








