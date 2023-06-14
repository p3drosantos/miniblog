import { Component } from "react";

export class Button extends Component {
    render(){
        const {texto, onClick} = this.props

        return(
            <button onClick={onClick}>
                {texto}
            </button>
        )
        
    }
}