import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class AddFriend extends React.Component {
    initialValues = {
        name: '',
        age: '',
        email: '',
    };

    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    };

    handleChange = event =>{
        this.setState({
            friend: {
                ...this.state.friend,
                [event.target.name]: event.target.value
            }
        });
    };

    addFriend = event =>{
        event.preventDefault();
        axiosWithAuth().post('/api/friends', this.state.friend)
            .then(response =>{
                this.setState({
                    friend: response.data
                })
            })
            .catch(error =>{
                console.log(error)
            })
            .finally(() =>{
                this.setState({
                    friend: this.initialValues
                })
            });
    };

    // postFriend = (newFriend) =>{
    //     axios.post('http://localhost:5000/api/friends', newFriend)
    //         .then(response =>{
    //             this.setState({
    //                 friend: [
    //                     ...this.state.friend,
    //                     response.data
    //                 ]
    //             });
    //         })
    //         .catch(error =>{
    //             console.log(error)
    //         })
    //         .finally(() =>{
    //             this.setState({
    //                 formValues: this.initialValues
    //             })
    //         });
    // };

    // onSubmit = event =>{
    //     event.preventDefault();

    //     const newFriend = {
    //         name: this.state.friend.name,
    //         age: this.state.friend.age,
    //         email: this.state.friend.email
    //     };

    //     this.postFriend(newFriend);
    // };

    render() {
        return (
            <div>
                <form onSubmit={this.addFriend}>
                    <label>Name:
                        <input
                            type='text'
                            name='name'
                            value={this.state.friend.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>Age:
                        <input
                            type='text'
                            name='age'
                            value={this.state.friend.age}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>Email:
                        <input
                            type='email'
                            name='email'
                            vlaue={this.state.friend.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        );
    };
};

export default AddFriend;