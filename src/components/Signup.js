import { useFormik } from "formik";
import validationSchema from "./Validations";
function Signup() {
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    }
  );

  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" onChange={handleChange} onBlur={handleBlur} />

        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}

        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input name="password" onChange={handleChange} onBlur={handleBlur} />

        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}

        <br />
        <br />

        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input
          name="passwordConfirm"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error">{errors.passwordConfirm}</div>
        )}

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
