import React from 'react'

export default class Header extends React.Component {
    constructor(props) 
    {
        super(props)

        this.state = {
            couter: 0
        }

        this.handleClick = this.handleClick.bind(this)
    }
        handleClick() 
        {
            this.setState(preven => ({
                couter : preven.couter +1
            }))
        }
    
    render() {
        let { name } = this.props
        return (
            <div>
                <h2>{name} : {this.state.couter}</h2>
                <button onClick={this.handleClick} > Click </button>
            </div>
        )

    }
}
