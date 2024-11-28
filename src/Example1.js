import React from "react";

class PropsExample extends React.Component{
    render (){
        return (
        <div>
            {this.customRnder({val:"some val"})}
        </div>
        )
            
        
    }

     customRnder(params) {
    
        return(<p>From customRnder {params.val}</p>) ;
        
        
    }
}

function SomeTest()
{
    return (<p>Some Test</p>);
}

function Clickme(){
    const clickme = (a)=>{ alert(a.type)};

    return (<button type="button" onClick={(z)=>{clickme(z)}}>Click here</button>)
}
function Needed(){
    return <p>Needed</p>
}

function NotNeeded(){
    return <p>Not Needed</p>
}

function ConditionalTesat(props)
{
    const isNeed = props.IsNeed;
    if(isNeed) {
        return (<Needed />);
    }
    return <NotNeeded />;
}

const carList =["Ford","Toyota","Audi","Mercede"]
const orgList = carList.map((el,index,list)=>({id:index,elem:el}));

function ListMyCar(){
   
    return (<div>
         <p>I have follwing</p>
        <ul>
            {
                orgList.map((e,index)=>(
                   <li key={index}>{ e.elem} </li>
                ))
            }
        </ul>
        </div>);
}

export  {PropsExample, SomeTest,Clickme , ConditionalTesat, ListMyCar}