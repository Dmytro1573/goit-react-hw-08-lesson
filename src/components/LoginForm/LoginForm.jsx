import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .than((data) => console.log(data))
      .catch((error) => console.log(error));
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor={emailId}>
            Email
            <Field type="email" name="email" id={emailId} />
          </label>
          <label htmlFor={passwordId}>
            Password
            <Field type="password" name="password" id={passwordId} />
          </label>
          <button type="submit">Log in </button>
        </Form>
      </Formik>
    </>
  );
}
