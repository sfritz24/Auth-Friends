import React from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    getData = () =>{
        axiosWithAuth().get('/api/friends')
            .then(response =>{
                this.setState({
                    friends: response.data
                })
            })
            .catch(error =>{
                console.log(error)
            });
    };

    componentDidMount() {
        this.getData();
    };

    render() {
        return (
            <div>
                {this.state.friends.map(friend =>(
                    <h3>{friend.name} is {friend.age} years old</h3>
                ))}
            </div>
        );
    };
};

export default FriendsList;