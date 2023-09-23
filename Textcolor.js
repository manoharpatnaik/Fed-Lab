import React,{Component} from "react";
class Textcolor extends Component{
    constructor(props){
        super(props);
        this.state={
            color:"#ff00ff"
        }
    }
    redHandler=()=>{
        this.setState({color:"#ff0000"})
    }
    blueHandler=()=>{
        this.setState({color:"#0000ff"})
    }
    greenHandler=()=>{
        this.setState({color:"#00ff00"})
    }
    render(){
        return(
            <>
            <h1 style={{color:this.state.color}}>This is Demo for text color change</h1>
            <button onClick={this.redHandler}>RED</button>
            <button onClick={this.greenHandler}>GREEN</button>
            <button onClick={this.blueHandler}>BLUe</button>

            </>
        )
    }
}

export default Textcolor;