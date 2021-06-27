import React, {useState, useContext} from 'react';
import {Context} from "../index";
import {observer} from 'mobx-react-lite';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);
    return (
        <div>
            <input
                onChange={event => setEmail(event.target.value)}
                value={email}
                type="text"
                placeholder="email"/>

            <input
                onChange={event => setPassword(event.target.value)}
                value={password}
                type="text"
                placeholder="password"/>
            <button onClick={() => store.login(email, password)}>Login</button>
            <button onClick={() => store.registration(email, password)}>Registration</button>
        </div>
    );
};

export default observer(LoginForm);
