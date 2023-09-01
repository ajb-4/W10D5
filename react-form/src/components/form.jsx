import {useState} from 'react';

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneType, setPhoneType] = useState("");
    const [staff, setStaff] = useState("");
    const [bio, setBio] = useState("");
    const [signUp, setSignUp] = useState("");

    const [errorMessages, setErrorMessages] = useState([]);



    const validate = () => {
        const errors = [];

        if (name.length === 0) {
            errors.push("Name is required, cannot be empty.")
        } 
        if (email.length === 0 && !email.includes("@")) {
            errors.push("Email is required, cannot be empty, and should be properly formatted.")
        }
        if (phoneNumber !== null && phoneNumber.length !== 10) {
            errors.push("Phone number should be properly formatted.")
        }

        return errors;
    }

    const handleChange = field => {
        return (e) => {
            switch (field) {
            case 'name': 
                setName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'phoneNumber':
                setPhoneNumber(e.target.value);
                break;
            case 'phoneType':
                setPhoneType(e.target.value);
                break;
            case 'staff':
                setStaff(e.target.value);
                break;
            case 'bio':
                setBio(e.target.value);
                break;
            case 'signUp':
                setSignUp(e.target.value);
                break;
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = validate();

        if (errors.length) {
            setErrorMessages(errors);
        } else {
            let user = {
                name,
                email,
                phoneNumber,
                phoneType,
                staff,
                bio,
                signUp
            };
            console.log(user);
            setErrorMessages([]);
        }
    }

    const showErrors = () => {
        if (!errorMessages.length) {
            return null;
        } else {
            return (
                <ul>
                    {errorMessages.map(error => <li>{error}</li>)}
                </ul>
            )
        }
    }

    return (
        <>
            {showErrors()}
            <form className='form' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label htmlFor=""> Name:
                    <input type="text" placeholder='Name' onChange={handleChange('name')} value={name} />
                </label>
                <br />
                <label htmlFor="">Email:
                    <input type="text" placeholder='Email' onChange={handleChange('email')} value={email} />   
                </label>
                <br />
                <label htmlFor="">Phone Number:
                    <input type="tel" placeholder='Phone Number' onChange={handleChange('phoneNumber')} value={phoneNumber} />
                </label>
                <br />
                <label htmlFor="">Phone Type:
                    <select name="" id="">
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="mobile">Mobile</option>
                    </select>
                </label>
                <br />
                <label htmlFor="">Staff:
                    <label htmlFor="">Instructor
                    <input type="radio"  name='staff' onClick={handleChange('staff')} value="Instructor" />
                    </label>
                    <label htmlFor="">Student
                    <input type="radio"  name='staff' onClick={handleChange('staff')} value="Student" /> 
                    </label> 
                </label>
                <br />
                <label htmlFor="">Bio:
                    <input type="text" placeholder="Bio" onChange={handleChange('bio')} value={bio} />
                </label>
            </form>

        </>
    )

}


export default Form;