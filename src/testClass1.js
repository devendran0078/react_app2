import React from   "react";

class Car1 extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        model: "Campry",
        color : "red"
    }
    }

    changeColor = ()=>
        {
        this.setState({color:"Green"}

        );
    }
/*
    static getDerivedStateFromProps(props,state)
    {
      return { color: props.col}
    }*/

      shouldComponentUpdate(){
        return false;
      }

    render(){
        return <div>
            <p>I m from Car1</p>
            <p>my color is {this.state.color}</p>
            <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
            </div>
    }

}

export default Car1