import { Link } from 'react-router-dom'
import ListErrors from './ListErrors'
import React from 'react'
import agent from '../agent'
import { connect } from 'react-redux'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
});

const mapStateToProps = state => ({
    ...state.auth,
    redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'password', value }),
  onChangeUsername: value =>
    dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'username', value }),
  onSubmit: (username, email, password) => {
    const payload = agent.Auth.register(username, email, password);
    dispatch({ type: 'REGISTER', payload })
    },
  onRedirect: () =>
    dispatch({ type:'REDIRECT'})
});

class Register extends React.Component {

  constructor() {
    super();
    this.changeEmail = event => this.props.onChangeEmail(event.target.value);
    this.changePassword = event => this.props.onChangePassword(event.target.value);
    this.changeUsername = event => this.props.onChangeUsername(event.target.value);
    this.submitForm = (username, email, password) => event => {
      event.preventDefault();
      this.props.onSubmit(username, email, password);
    }
  }
  
  componentWillReceiveProps(nextProps) {
      if (nextProps.redirectTo) {
        this.props.history.push(nextProps.redirectTo);
        // clear redirectTo property after jump
        this.props.onRedirect();
      }
  }

  render() {
    const { email, username, password, classes } = this.props;

    return (
        <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <p className="text-xs-center">
            <Link to="login">
                Have an account?
            </Link>
          </p>
          <ListErrors errors={this.props.errors} />
          <form className={classes.form}  onSubmit={this.submitForm(username, email, password)}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Username</InputLabel>
              <Input type="text" value={username} onChange={this.changeUsername} autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input type="email" value={email} onChange={this.changeEmail} autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" value={password} onChange={this.changePassword} />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={this.props.inProgress}
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </main>     
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Register));


