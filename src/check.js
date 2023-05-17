import React from "react";
import onbulb from "./on.png";
import offbulb from "./off.png";





class Check extends React.Component{
    constructor(){
        super();
        this.state={bulb:"false"};
        this.on=this.on.bind(this)
        this.off=this.off.bind(this)
    }

    on(){
        this.setState({bulb:true})
    }

    off(){
        this.setState({bulb:false})
    }
    render(){
        
        return(
            <div className="Bulb">
            <button onClick={this.on}>ON</button>
            <img src={this.state.bulb? onbulb:offbulb} alt='bulb'/>
            {console.log(this.state.bulb)}

            <button onClick={this.off}>off</button>
            </div>
        )
    }
}

export default Check;

