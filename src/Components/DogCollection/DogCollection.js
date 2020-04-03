import React from 'react';
import DogCard from '../DogCard/DogCard'

import './DogCollection.css'

function DogCollection({dogs}){

    const makeDogACard = dogs.map(dog => {
        return <DogCard key={dog.id} dog={dog}/>
    })

    return(
        <>
            <h1 className='dog-container-title'>Dog Breeds</h1>
            <div className='dogs-card-container'>
                {makeDogACard}
            </div>
        </>
    )
}
export default DogCollection;