import React, { Component } from 'react';
import './DogCard.css'

class DogCard extends Component {
    
    state = {
        comments: [],
        isClicked: false,
        content: ''
    }

    handleClick = (event) => {
        const {isClicked} = this.state
        this.setState({
            isClicked: !isClicked
        })
    }

    handleDelete = (id) => {
        this.props.deleteDog(this.props.dog.id)
    }

    render(){
        const { dog } = this.props
        const { isClicked } = this.state
        return(
            <div className='dog-cards'>
                <h1 className='dog-breed-h1'>{dog.breed}</h1>
                    <img src={dog.image_url} onClick={this.handleClick} alt='dog-pic' className='dog-pic'></img>
                {isClicked 
                    ? <div>
                        <h6>Height: {dog.height}</h6>
                        <h6>Weight: {dog.weight}</h6>
                        <h6>Life Span: {dog.life_span}</h6>
                        <h5>Temperment: {dog.temperament}</h5>
                        <h6>Bred For: {dog.bred_for}</h6>
                        <p className='info-tag'>
                            More Info: <a href={dog.info_url} className='dog-url'>{`${dog.breed}`}</a>
                        </p>
                        <button onClick={this.handleDelete} className='delete-button'>Delete</button>
                    </div>
                    : null
                }
            </div>
        )
    }
}
export default DogCard;