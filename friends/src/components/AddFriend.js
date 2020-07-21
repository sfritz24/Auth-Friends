import React from 'react';
import axios from 'axios';

class AddFriend extends React.Component {
    initialValues = {
        name: '',
        age: '',
        email: '',
    };

    state = {
        friend: [],
        formValues: this.initialValues
    };

    handleChange = event =>{
        this.setState({
            formValues: {
                ...this.state.formValues,
                [event.target.name]: event.target.value
            }
        });
    };

    postFriend = (newFriend) =>{
        axios.post('http://localhost:5000/api/friends', newFriend)
            .then(response =>{
                this.setState({
                    friend: [
                        ...this.state.friend,
                        response.data
                    ]
                });
            })
            .catch(error =>{
                console.log(error)
            })
            .finally(() =>{
                this.setState({
                    formValues: this.initialValues
                })
            });
    };

    onSubmit = event =>{
        event.preventDefault();

        const newFriend = {
            name: this.state.formValues.name,
            age: this.state.formValues.age,
            email: this.state.formValues.email
        };

        this.postFriend(newFriend);
    };
};