import React, { useState } from "react";

const SignupForm = ({changeForm, goMain}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        //e.preventDefault();
        // logic for submitting the form
        // console.log(formData);
        goMain();
      };



    return (
        <>
            <form onSubmit={handleSubmit} className='login_form'>
                    <div>
                    <label htmlFor="name">What's your name?</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                    />
                    </div>

                    <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email address"
                    />
                    </div>

                    <div>
                    <label htmlFor="username">User name</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        placeholder="Create a username"
                        />
                    </div>

                    <div>
                    <label htmlFor="password">Create a passcode</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    </div>

                    <div>
                    <label htmlFor="confirmPassword">Confirm your passcode</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    </div>

                    <div>
                        <input type="checkbox" className='checkbox-form'></input>
                        <label>By signing up, you agree to our Terms and Privacy Policy.</label>
                    </div>

                    <button className='submit_button' type="submit">Sign up</button>
                </form>
                <div className='content content-tail'>Already have an account? <button className='switch_login' onClick={ () => changeForm()}>Log in</button></div>
            </>
    );
}

export default SignupForm;