import React, { Component } from 'react'
import DogForm from '../DogForm/DogForm'
import DogFilter from '../DogFilter/DogFilter'
import './DogFormContainer.css'

export default class DogFormContainer extends Component {

    state = {
        show: false
    }

    handleClick = () => {
        this.setState({show: !this.state.show})
    }

    render() {
        const { show } = this.state
        const { addDog } = this.props
        return (
            <div className='filter-and-form'>

                <DogFilter updateSearch={this.props.updateSearch} />

                <div className='button-container-dog-form'>
                    <button onClick={this.handleClick} className='add-dog-button'>
                        {show ? 'Close Form' : 'Add Dog'}
                    </button>

                    <div style={{display: show ? "block" : "none"}} className='the-div'>
                        <DogForm  handleClick={this.handleClick} addDog={addDog} />
                    </div>
                </div>

            </div>
        )
    }
}