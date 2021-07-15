import './App.css';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {useContext, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import Header from "./components/Header";
import LinearProgress from '@material-ui/core/LinearProgress';

const App = () => {
    const {store} = useContext(Context);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
    }, []);

    if (store.isLoading) {
        return <LinearProgress />
    }


    if (!store.isAuth) {
        return (
            <LoginForm/>
        )
    }

    return (
        <div>
            <Header/>
        </div>
    );
}

export default observer(App);
