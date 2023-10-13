import React, { useState } from "react";

const LoginForm = ({changeForm, goMain}) => {
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
        goMain();
      };

    return (
        <>  
        <form onSubmit={handleSubmit} className='login_form'>
           <div>
                <label htmlFor="username">User name</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    placeholder="Enter your username"
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
                    <input type="checkbox" className='checkbox-form'></input>
                    <label>By signing up, you agree to our Terms and Privacy Policy.</label>
                </div>

                <button className='submit_button' type="submit">Sign in</button>
        </form>
        <div className='content content-tail'>Don't have an account? <button className='switch_login' onClick={ () => changeForm()}>Sign up</button></div>
        </>
    );
}
export default LoginForm;