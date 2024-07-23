import "./App.css";
import React, { useState } from "react";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [languages, setLanguages] = useState({
        english: true,
        tamil: false,
        hindi: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender,
            selectedOption,
            languages,
            resume,
            url,
            about
        );
        alert("Your Request Has Been Submitted to the HR, We will contact you as soon as possible");
        // Add your form submission logic here
    };

    const handleLanguagesChange = (sub) => {
        setLanguages((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setLanguages({
            english: true,
            tamil: false,
            hindi: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };

    return (
        <div className="App">
            <h1>Form for Placement Drive</h1>
            <fieldset>
                <form action="#" method="get" onSubmit={handleSubmit}>
                    <label htmlFor="firstname">First Name*</label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter First Name"
                        required
                    />
                    <label htmlFor="lastname">Last Name*</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter Last Name"
                        required
                    />
                    <label htmlFor="email">Enter Email* </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                    />
                    <label htmlFor="contact">Contact*</label>
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Enter Mobile number"
                        required
                    />
                    <label>Gender*</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        id="other"
                        checked={gender === "other"}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Other
                    <label>Languages Known</label>
                    <input
                        type="checkbox"
                        name="lang"
                        id="english"
                        checked={languages.english}
                        onChange={() => handleLanguagesChange("english")}
                    />
                    English
                    <input
                        type="checkbox"
                        name="lang"
                        id="tamil"
                        checked={languages.tamil}
                        onChange={() => handleLanguagesChange("tamil")}
                    />
                    Tamil
                    <input
                        type="checkbox"
                        name="lang"
                        id="hindi"
                        checked={languages.hindi}
                        onChange={() => handleLanguagesChange("hindi")}
                    />
                    Hindi
                    <label htmlFor="file">Upload Resume*</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) => setResume(e.target.files[0])}
                        required
                    />
                    <label htmlFor="url">Enter URL*</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter URL"
                        required
                    />
                    <label>Select your Job</label>
                    <select
                        name="select"
                        id="select"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="" disabled>
                            Select your Ans
                        </option>
                        <optgroup label="Programming Languages">
                            <option value="1">Python</option>
                            <option value="2">Java</option>
                            <option value="3">C, C++</option>
                        </optgroup>
                        <optgroup label="Web Developer">
                            <option value="4">FrontEnd Developer</option>
                            <option value="5">BackEnd Developer</option>
                            <option value="6">FullStack Developer</option>
                        </optgroup>
                    </select>
                    <label htmlFor="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="About yourself"
                        required
                    ></textarea>
                    <button type="reset" onClick={handleReset}>
                        Reset
                    </button>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default App;
