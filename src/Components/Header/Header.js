import React, { Component } from 'react';
import './Header.css'
import Auth from '../Auth/Auth'

class Header extends Component {

    state = {
        login: false,
        signup: false
    }

    showLogin = () => {
        this.setState({login: !this.state.login})
    }

    showSignup = () => {
        this.setState({signup: !this.state.signup})
    }

    logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user_id')
        alert('Logged Out')
    }

    render(){
        const {login, signup} = this.state
        return(
            <header>
                <div className='button-container'>
                    <button onClick={this.showLogin} className='auth-buttons'> Login </button>
                    <button onClick={this.showSignup} className='auth-buttons'> Join </button>
                    <button onClick={this.logout} className='auth-buttons'> Logout </button>
                    {login ? <Auth showLogin={this.showLogin} /> : null}
                    {signup ? <Auth showSignup={this.showSignup} /> : null}
                </div>
                <h1 className='app-title'>Doggos</h1>
            </header>
        )
    }
}
export default Header;