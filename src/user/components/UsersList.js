import React from 'react';
import UserItem from './UserItem';
import './UsersList.css';
import Card from '../../shared/components/UIElements/Card/Card';

const  UsersList = ({users}) => {
    if (!users || !users.length || users.length === 0) {

        return ( 
            <Card>
                <div className="center">
                    <h2>No Users Found</h2>
                </div>
            </Card>
        );

    } 

    return (
        <ul className = "users-list">
            {users.map(user => {
                return <UserItem 
                    key = {user.id} 
                    id = {user.id} 
                    image = {user.image} 
                    name = {user.name} 
                    places = {user.places}
                    placeCount = {user.places.length}
                />
            })}

        </ul>
    )
}
 
export default UsersList;