import React from "react";

class MountExample extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render (){
       return ( 
        <>
         <ChildMountExample show= {false} />
         <p>This is From MountExample</p> 
        </>
       

       )
    }
}

class ChildMountExample extends React.Component{
    render(){
        const { show } = this.props; 
        return (
            
            <div>
                <p>{show ? "true" : "false"}</p>
               
                {show && <h1>Child </h1>}
    
            </div>
        );
    }
}

export default MountExample