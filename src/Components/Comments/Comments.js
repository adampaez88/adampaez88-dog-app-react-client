import React, { Component } from 'react';
import './Comments.css';

class Comments extends Component {
    state = {
        content: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // this.props.addComment(this.state)
        
    }

    handleChange = (event) => {
        const {value, name} = event.target
        this.setState({[name]: value})
    }


    render(){
        
        return(
            <>
                <form onSubmit={this.handleSubmit} className='comment-form'>
                    <input type='text'  placeholder='Comment' className='comment-input'/>
                </form>
                <h4 className='comments'>`user`: {this.props.comments.content}</h4>
            </>
        )
    }
}

export default Comments;