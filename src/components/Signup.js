import { useFormik } from "formik";

function Signup() {
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" onChange={handleChange} />

        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input name="password" onChange={handleChange} />

        <br />
        <br />

        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input name="passwordConfirm" onChange={handleChange} />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
