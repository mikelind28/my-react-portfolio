import { useState } from 'react';
import { validateEmail } from '../utils/validate-email';

export default function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name) {
            setErrorMessage("Please provide your name.");
            return;
        }
        if (!validateEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }
        if(!message) {
            setErrorMessage("This field is required.")
            return;
        }
        setErrorMessage("Thanks for reaching out! (This form is for learning purposes only and does not currently link to anything.)");
        setName('');
        setEmail('');
        setMessage('');
        return;
    }

    const handlePointerLeave = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;
        if (!inputValue) {
            setErrorMessage(`The ${inputType} field is required.`);
            return;
        }
    }

    return (
        <>
        <form
        name="contact-me"
        onSubmit={handleSubmit}
        >
            <input
            value={name}
            type="text"
            name="name"
            placeholder="name"
            onChange={handleInputChange}
            onPointerLeave={handlePointerLeave}
            required
            >
            </input>

            <input
            value={email}
            type="email"
            name="email"
            placeholder="email"
            onChange={handleInputChange}
            onPointerLeave={handlePointerLeave}
            required
            >
            </input>

            <textarea
            value={message}
            name="message"
            placeholder="message"
            rows={8}
            onChange={handleInputChange}
            onPointerLeave={handlePointerLeave}
            required
            >
            </textarea>

            <input
            type="submit"
            value="send"
            id="submit-button"
            >
            </input>
        </form>
        {errorMessage && (
            <div>
            <p id="error-message">{errorMessage}</p>
            </div>
        )}
        </>
    );
}