import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    
    getStyle = () => {
        return {
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            background: 'light-grey',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        // destructuring
        const { id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange = {this.props.markComplete.bind(this, id)}/> {' '}
                    { title }
                    <button onClick = {this.props.delTodo.bind(this, id)}style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'black',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default TodoItem;