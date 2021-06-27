import './App.css';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {useContext, useEffect} from 'react';
import {observer} from 'mobx-react-lite';

const App = () => {
    const {store} = useContext(Context);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
    }, [])

    if (!store.isAuth) {
        return (
            <LoginForm/>
        )
    }

    return (
        <div>
            <h1>{store.isAuth ? `User has logged ${store.user.email}` : "Authorization"}</h1>
            <button onClick={() => store.logout()}>Exit</button>
        </div>
    );
}

export default observer(App);
