import React, { Component } from 'react'
import './DogForm.css'

export default class DogForm extends Component {

    state = {
        breed: '',
        bred_for: '',
        life_span: '',
        height: '',
        weight: '',
        temperament: '',
        image_url: '',
        info_url: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        this.props.addDog(this.state)
        this.setState({
            breed: '',
            bred_for: '',
            life_span: '',
            height: '',
            weight: '',
            temperament: '',
            image_url: '',
            info_url: ''  
        })
        this.props.handleClick()
    }

    render(){
        return (
            <div className='dog-form-container'>
                <form onSubmit={this.handleSubmit} className='dog-form'>
                    <input type='text' name='breed' onChange={this.handleChange} placeholder='Breed' className='dog-form-inputs' required />
                    <input type='text' name='height' onChange={this.handleChange} placeholder='Height' className='dog-form-inputs' required />
                    <input type='text' name='weight' onChange={this.handleChange} placeholder='Weight' className='dog-form-inputs' required />
                    <input type='text' name='life_span' onChange={this.handleChange} placeholder='Life Span' className='dog-form-inputs' required />
                    <input type='text' name='bred_for' onChange={this.handleChange} placeholder='Bred For' className='dog-form-inputs' required />
                    <input type='text' name='temperament' onChange={this.handleChange} placeholder='Temperament' className='dog-form-inputs' required />
                    <input type='text' name='image_url' onChange={this.handleChange} placeholder='Image'  className='dog-form-inputs' required />
                    <input type='text' name='info_url' onChange={this.handleChange} placeholder='Info' className='dog-form-inputs' required />
                    <input type='submit' className='submit' value="Add Breed" />
                </form>
            </div>
        )
    }
}