import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';
import Car1  from './testClass1';
import MountExample from './mountExample';
import {PropsExample, SomeTest,Clickme,ConditionalTesat, ListMyCar} from './Example1';
import { FormExample } from './formExample';

class Car extends React.Component{
  constructor(){
   super();
   this.state = {
    color:"Red",
    Model : "Toyota"
   }
  }

  render() { 
    return <p>I m from class Car. My color is {this.state.color} and it was {this.props.year}</p>
  }
}

class Garage extends React.Component{
   render(){
    return(
      <div>
      <p>My car </p>
      <h1><Car year="2025"/></h1>
    
      </div>
    )
   }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Garage />
   <Car1 col = "Green1"/>
   <MountExample />
   <PropsExample />
  <SomeTest />
  <Clickme />
  <ConditionalTesat IsNeed={true}/>
  <ListMyCar/>
  <FormExample/>
  </>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
