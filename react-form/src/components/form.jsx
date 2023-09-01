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

    
}


export default Form;