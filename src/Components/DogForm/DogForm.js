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
        // const formData = new FormData(event.target)
        // const dogBreed = formData.get('breed')
        // const dogBredFor = formData.get('bred_for')
        // const dogLifeSpan = formData.get('life_span')
        // const dogHeight = formData.get('height')
        // const dogWeight = formData.get('weight')
        // const dogTemperament = formData.get('temperament')
        // const dogImage = formData.get('image_url')
        // const dogInfo = formData.get('info_url')
    
        const formData = new FormData(event.target)
        const dog = {
            breed: formData.get('breed'),
            bred_for: formData.get('bred_for'),
            life_span: formData.get('life_span'),
            height: formData.get('height'),
            weight: formData.get('weight'),
            temperament: formData.get('temperament'),
            image_url: formData.get('image_url'),
            info_url: formData.get('info_url'),
            user_id: `${localStorage.getItem('user_id')}`
        }

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

        fetch('http://localhost:3000/dogs' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('token')}`
            },
            body: JSON.stringify(dog)
        }).then(response => response.json())
        .then(console.log)
    }

    render() {
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