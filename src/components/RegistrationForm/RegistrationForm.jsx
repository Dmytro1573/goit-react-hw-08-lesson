import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .catch(() => {
        alert("Registration error!");
      });
    actions.resetForm();
  };

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor={nameId}>
            Username
            <Field type="text" name="name" id={nameId} />
          </label>
          <label htmlFor={emailId}>
            Email
            <Field type="email" name="email" id={emailId} />
          </label>
          <label htmlFor={passwordId}>
            Password
            <Field type="password" name="password" id={passwordId} />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
}
