import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { DevTool } from "react-hook-form-devtools";

const useStyles = makeStyles(() => ({
  textField: {
    display: "flex",
    width: "49%",
    marginTop: "1em",
    justifyContent: "center",
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const { register, errors, handleSubmit, control } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      username: "Jack",
      email: "jacksahani@gmail.com",
      password: "Pepperoni",
    },
  });

  return (
    <Box m={1} p={1} style={{ width: "50%" }}>
      <DevTool control={control} />
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
          id="username"
          name="username"
          label="User Name"
          error={!!errors.username}
          inputRef={register({ required: true })}
          margin="normal"
        />

        <TextField
          fullWidth
          className={classes.textField}
          id="email"
          name="email"
          label="Email"
          type="email"
          error={!!errors.email}
          inputRef={register({ required: true })}
          margin="normal"
        />

        <TextField
          className={classes.textField}
          id="password"
          name="password"
          label="Password"
          type="password"
          error={!!errors.password}
          inputRef={register({ required: true })}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;