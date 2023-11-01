import { useState } from "react";
function CustomerDetails() {
    let na=getCustomerName(name);
    const [name, setCustomerName] = useState(name.value);
    const [age, setAge] = useState(age.value);
    const [address, setAddress] = useState("");
    const [phone, setPhoneNumber] = useState(phone.value);
    const [email, setEmailId] = useState(email.value);
    function validate() {
        let vstatus = false;
        if (name === "") {
            alert("Name should not be blank");
        }
        else {
            vstatus = true;
        }
        if (name.length >= 25) {
            alert("Name should be less than 25 characters");
        }
        else {
            vstatus = true;
        }

        if (age < 18) {
            alert("Age should be greater than 18");
        }
        else {
            vstatus = true;
        }
        if (phone.length !== 10) {
            alert("Enter a valid phone number");
        }
        else {
            vstatus = true;
        }

        // if (email.match(/[^a-zA-Z0-9@]/)) {
        //     alert("Email should contain only alphabets and numbers");
        // }
        // else {
        //     vstatus = true;
        // }

        if (email.charAt(0).match(/[^a-zA-z]/)) {
            alert("Email should start with Alphabets");
        }
        else {
            vstatus = true;
        }

        if (email.indexOf('@') === 0) {
            alert("Enter a valid mail id");
        }
        else {
            vstatus = true;
        }
        return vstatus;

    }

    return (
        <div><center>
            <b>customerDetails</b>
            <form >
                <label>Customer Name:</label>
                <input type="text" id="name" onChange={e => { setCustomerName(e.target.value) }} defaultValue={name}></input><br></br>
                <label>Age:</label>
                <input type="number" onChange={e => { setAge(e.target.value) }} defaultValue={age}></input><br></br>
                <label>Address:</label><br></br>
                <textarea rows="5" columns="20" onChange={e => { setAddress(e.target.value) }} defaultValue={address}></textarea><br></br>
                <label>Phone Number:</label>
                <input type="number" onChange={e => { setPhoneNumber(e.target.value) }} defaultValue={phone}></input><br></br>
                <label>Email id:</label>
                <input type="email" onChange={e => { setEmailId(e.target.value) }} defaultValue={email}></input><br></br>
                <input type="submit" value="ADD" onclick={validate()}></input>
                <input type="reset" value="RESET"></input>
            </form></center>
            <b>CustomerName</b>{name}<br></br>
            <b>CustomerAge</b>{age}<br></br>
            <b>CustomerAddress</b>{address}<br></br>
            <b>Phone Number</b>{phone}<br></br>
            <b>Email ID</b>{email}<br></br>
        </div>
    )
}
export default CustomerDetails;