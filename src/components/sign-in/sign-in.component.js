import React from "react";
import Box from "@material-ui/core/Box";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { signInWithGoogle } from "../../firebase";
const useStyles = makeStyles((theme) => ({
  textField: {
    display: "flex",
    width: "49%",
    marginTop: "1em",
    justifyContent: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "jacksahani@gmail.com",
      password: "Pepperoni",
    },
  });

  return (
    <Box m={1} p={1} style={{ width: "50%" }}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <TextField
          fullWidth
          className={classes.textField}
          name="email"
          label="Email"
          type="email"
          error={!!errors.email}
          inputRef={register({ required: true })}
          margin="normal"
        />

        <TextField
          className={classes.textField}
          name="password"
          label="Password"
          type="password"
          error={!!errors.password}
          inputRef={register({ required: true })}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Sign In
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<ExitToAppIcon />}
          onClick={signInWithGoogle}
        >
          Sign In with Google
        </Button>
      </form>
    </Box>
  );
};

export default SignIn;
