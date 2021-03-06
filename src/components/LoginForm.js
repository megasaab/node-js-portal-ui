import React, {useState, useContext} from 'react';
import {Context} from "../index";
import {observer} from 'mobx-react-lite';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const LoginForm = () => {
    function Copyright() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    megasaab98
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }
    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },

        signIn: {
            textAlign: 'center',
        }
    }));

    const handle = (e) => {
        if (e.key === 'Enter') {
           store.login(email, password);
        }
    };

    const setAuth = () => {
        auth ? setAuthState(false) : setAuthState(true);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuthState] = useState(false);
    const {store} = useContext(Context);
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    {auth ? 'Registration' : 'Sign in'}
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        onKeyDown={handle}
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        onKeyDown={handle}
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        onClick={() => store.authenticate(email, password, auth)}
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                       {auth ? "Sign Up" : "Sign In"}
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link onClick={() => setAuth()}>
                                {auth ? "Sign In" : "Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
};

export default observer(LoginForm);
