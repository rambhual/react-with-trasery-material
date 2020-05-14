import React, { useRef } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { DevTool } from "react-hook-form-devtools";
import { auth, createUserProfileDocument } from "../../firebase";
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
  const { register, errors, handleSubmit, control, watch } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      displayName: "Jack Sahani",
      email: "jacksahani@gmail.com",
      password: "Pepperoni",
      password_repeat: "Pepperoni",
    },
  });
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    try {
      const { displayName, email, password } = data;
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Box m={1} p={1} style={{ width: "50%" }}>
      <DevTool control={control} />
      <h2>I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          fullWidth
          className={classes.textField}
          name="displayName"
          label="User Name"
          error={!!errors.displayName}
          inputRef={register({ required: true })}
          margin="normal"
        />

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
          inputRef={register({
            required: "You must specify a password",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
          margin="normal"
        />
        <TextField
          className={classes.textField}
          name="password_repeat"
          label="Confirm Password"
          type="password"
          error={!!errors.password_repeat}
          inputRef={register({
            validate: (value) =>
              value === password.current || "The passwords do not match",
          })}
          margin="normal"
          helperText={errors.password_repeat && errors.password_repeat.message}
        />
        <Button
          type="submit"
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          color="primary"
        >
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;
