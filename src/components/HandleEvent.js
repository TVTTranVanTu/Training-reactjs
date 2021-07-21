import React, { useState } from 'react';

function HandleEvent(props) {
    const [fullName, setFullname] = useState('');
    const [englishName, setEnglishName] = useState('');
    const [age, setAge] = useState('');
    const [homeTown, setHomeTown] = useState('');
    const [check, setCheck] = useState(false);
    const list = ["key", "mouse", "submit form"];
    const handleSubmit = (e) => {
        e.preventDefault();
        if (fullName && englishName && age && homeTown) {
            setCheck(true);
        } else {
            alert("Fields cannot be left blank!");
        }
    }
    return (
        <div>
            <form
                style={{ display: ` ${check === false ? 'block' : 'none'}` }}
                className="form-inf" onSubmit={handleSubmit}>
                <div className="title">Demo&nbsp;
                    {
                        list.map((item, index) => (
                            <div key={index}>{item}&nbsp;</div>
                        ))
                    }
                    in Reactjs
                </div>
                <input
                    placeholder="Enter your fullName"
                    type="text"
                    value={fullName}
                    onChange={e => setFullname(e.target.value)} />
                <input
                    placeholder="Enter your englishName"
                    type="text" value={englishName}
                    onChange={e => setEnglishName(e.target.value)} />
                <input
                    placeholder="Enter your age"
                    type="text" value={age}
                    onChange={e => setAge(e.target.value)} />
                <input
                    placeholder="Enter your homeTown"
                    type="text"
                    value={homeTown} onChange={e => setHomeTown(e.target.value)} />
                <button className="btn btn-sb" type="submit">Submit</button>
            </form>
            <div className="infor-box" style={{ display: ` ${check === false ? 'none' : 'block'}` }} >
                <h1>Hello everyone,</h1>
                <h2>My name is {fullName} and englishname is {englishName}</h2>
                <h2>I'm {age} years old. I was born and grew up in {homeTown}</h2>
                <button className="btn" onClick={() => setCheck(false)}>Back</button>
            </div>
        </div>
    );
}

export default HandleEvent;