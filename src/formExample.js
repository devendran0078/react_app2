import React, { useState }  from "react";

class FormExample extends React.Component{
render(){
   // const up = <this.update/>
  
    return(
        <>
         <h1>From Form<br/><br/></h1>
        <LoadForm/>
        </>
)

}
}

function LoadForm(){
    const[txtState,changeState] = useState("")

    const show = ()=>{alert(txtState)}
return (
    <>
     <form>
            <label>Enter Name:
                <input type="text" value={txtState} onChange={e=>changeState(e.target.value)}></input>
                <button type="button" onClick={show}>Click Me</button>
            </label>
            <PassVeriable someTxt={txtState}/>
         </form>
    </>
)
}

function ShowMessage(msg)
{
    alert(msg)
}

function PassVeriable({someTxt})
{
    const displayMsg =()=>{alert("updated msg "+someTxt)}
    return (
        <>
        <br/>
        <button type="button" onClick={displayMsg}>show message</button>
        </>
    )
}

export {FormExample}