

import React,  {Component} from 'react'



class  DishDetail  extends  Component{

constructor(){
super()
this.state = {
   
    DishDetail: 'This is  the List of the ingerdient that made of the Dishes'

}

}
 
render(){

return(
<div>

<h1> {this.state.DishDetail}</h1>
<ol>
<h4>Donut is made from wheat & honey</h4>

<h4> Pizza is made from wheat</h4>
<h4>CheeseCake is made from butter</h4>
<h4>Injera is made from teff</h4>
 
 </ol>
  </div>

// DishDetail {this.props.name} List the kind of food you are looking for from the menu { this.props.heroName}
    
)

     /*   if(DishDetail=null){

            return <div></div>
        }
*/
    }
}

export  default DishDetail