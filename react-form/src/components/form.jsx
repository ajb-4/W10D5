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
                break
            }
        }
    }

}


export default Form;