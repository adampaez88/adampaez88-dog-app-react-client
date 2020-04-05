import React from 'react';
import './Auth.css';

function Auth({ showSignup, showLogin, showAuthForm }){

    const handleSignup = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const user = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password')
        }

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
        .then(response => {
            return fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(response => response.json())
            .then(stashToken => {
                localStorage.setItem('token', stashToken.token)
            })
        })
        event.target.reset()
        alert('Welcome')
    }

    const handleLogin = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const user = {
            username: formData.get('username'),
            password: formData.get('password')
        }

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
        .then(stashToken => {
            localStorage.setItem('token', stashToken.token)
            localStorage.setItem('user_id', stashToken.user_id)
        })
        event.target.reset()
        alert('Login Successful')
    }

    return(
        <div className='form-container'>
            {showSignup 
                ?   <form onSubmit={handleSignup} className='signup-form'>
                        <input type='text' name='username' placeholder='username' />
                        <input type='text' name='email' placeholder='email' />
                        <input type='password' name='password' placeholder='password' />
                        <input type='submit' className="submit" value='Sign Up' />
                    </form>
                : null
            }

            {showLogin
                ?   <form onSubmit={handleLogin} className='login-form'>
                        <input type='text' name='username' placeholder='username' />
                        <input type='password' name='password' placeholder='password' />
                        <input type='submit' className="submit" value="Login" />
                    </form>
                :null
            }
        </div>
    )
}
export default Auth;