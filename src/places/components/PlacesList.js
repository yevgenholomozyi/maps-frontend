import React from 'react';
import './PlaceList.css';
import Card from '../../shared/components/UIElements/Card/Card';
import Button from '../../shared/components/FormElements/Button/Button';
import PlaceItem from './PlaceItem';

const PlacesList = ({ places, onDeletePlace }) => {
    
    if (places.length === 0) {
        return (
            <div className = "place-list center"> 
                <Card>
                    <h2>No Places Yet. Maybe Create One</h2>
                    <Button to="places/new"> SHARE PLACE </Button>
                </Card>
            </div>
        ) 
    }

    return (
        <ul className = "place-list">
            {places.map(place => {
                return <PlaceItem 
                    key = {place.id} 
                    id = {place.id} 
                    image = {place.image}
                    title = {place.title}
                    description = {place.description}
                    address = {place.address}
                    creatorId = {place.creator}
                    coordinates = {place.location}
                    onDelete = {onDeletePlace}
                />
            })}
        </ul>
        
    )
}
 
export default PlacesList;