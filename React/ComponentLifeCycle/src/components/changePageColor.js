import { Component } from "react";

class ChangePageColor extends Component{
    constructor(props){
        super(props);
        this.state={color:"blue"};
    }
    changeColor =(color)=>{
        this.setState({color});
    };
    render(){
        return(
            <div><b>In Mounting phase</b><br></br>
            <select defaultValue={this.state.color} onChange={(e)=>{this.changeColor(e.target.value);}}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="brown">Brown</option>
                <option value="pink">Pink</option>
                <option value="teal">Teal</option>
            </select>
            <div id="mnt"></div>
            </div>
        )
    }
    componentDidMount(){
        let dv = document.getElementById("mnt");
        dv.innerHTML += "<b><u><br>Component mounted</u></b>";
        dv.style.color =  this.state.color;
    }
    componentDidUpdate(){
        let dv=document.getElementById("mnt");
        dv.innerHTML += "<br><b><i>Component Updated</i></b>";
        dv.style.color=this.state.color;
    }
    componentWillUnmount(){
        //write the code to save the state of the component into a
        //database or a file
        const dv=document.getElementById("mnt");
        dv.innerHTML += "<br><b><i>Component Unmounted</i></b>"; 
    }
}
export default ChangePageColor;