import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = event =>{
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    };

    login = event =>{
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state.credentials)
            .then(response =>{
                localStorage.setItem('token', response.data.payload);
                this.props.history.push('/protected');
            })
            .catch(error =>{
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
            </div>
        );
    };
};

export default Login;