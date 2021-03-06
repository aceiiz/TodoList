import React from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component{
    render()
    {
        let {items} =this.props
        return(
            <div>
                <ul>
                    {
                        items.map((todo,i) => <li key={i}><TodoItem text={todo}/></li>)
                    }
                </ul>
            </div>
        )
    }
}