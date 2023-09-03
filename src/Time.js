import { Component } from "react";

export default class Time extends Component {
    constructor() {
        super();
        this.state = {
            clock: new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        this.werTimer = setInterval( () =>
        this.ter(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.werTimer)
    }

    ter() {
        this.setState ( {
            clock: new Date().toLocaleString()
        })
    }

    render() {
        return(
            <div>
                <p>{this.state.clock}</p>
            </div>
        )
    }
}