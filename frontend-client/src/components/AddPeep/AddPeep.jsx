import React from 'react';
import { useState } from 'react';
import './AddPeep.css';
import { useNavigate } from 'react-router-dom';
import env from "react-dotenv";

const Peep = () => {
    const [content, setContent] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const username = localStorage.getItem('username');


    const handleSubmit = (event) => {
        event.preventDefault();

        // Make a POST request to create new post
        fetch(`${env.REACT_APP_SERVER_BASE_URL}/posts`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ content, username: username}),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('failed to create post');
                }
                navigate('/');

                // setSuccessMessage('post created successfully');
                // setErrorMessage('');
            })
            .catch((error) => {
                console.log(error);
                setSuccessMessage('');
                setErrorMessage(error.message);
            });

        // Clear form fields
        setContent('');
    };
    //the form
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="peep">
                        Add peep:
                    </label>
                        <input
                            id="peep"
                            className="form-control"
                            rows="4"
                            type="textarea"
                            value={content}
                            placeholder="Peep"
                            onChange={(event) => setContent(event.target.value)}
                        />
                </div>
                    <button type="submit" className="btn btn-primary">Submit</button>

            </form>
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
  );
};

export default Peep;