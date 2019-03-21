import React, { Component } from 'react'

export default class TodoItems extends Component {

    render() {
        let {text} = this.props
        return (
            <div>
                {text}
            </div>
        )
    }

}


