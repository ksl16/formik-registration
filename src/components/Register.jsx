import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const defaultValues = {
    fullname: "",
    phoneno: "",
    email: "",
    password: "",
    fields: [],
  };

  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .required("Please Enter the Fullname")
      .min(3, "Minimum 3 chars are requires")
      .max(12, "Max 12 chars are valid"),
    phoneno: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
    fields: Yup.array().min(1, "Please select atleast one field"),
  });

  const handlesubmit = (values) => {
    //console.log(values);
    localStorage.setItem("users", JSON.stringify(values));
    defaultValues.fullname = "";
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={handlesubmit}
      >
        <Form>
          <div className="form-group">
            <label>Full Name</label>
            <Field type="text" className="form-control" name="fullname" />
            <p className="text-danger">
              <ErrorMessage name="fullname" />
            </p>
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <Field type="text" className="form-control" name="phoneno" />
            <p className="text-danger">
              <ErrorMessage name="phoneno" />
            </p>
          </div>
          <div className="form-group">
            <label>Email address</label>
            <Field type="email" className="form-control" name="email" />
            <p className="text-danger">
              <ErrorMessage name="email" />
            </p>
          </div>
          <div className="form-group">
            <label>Password</label>
            <Field type="password" className="form-control" name="password" />
            <p className="text-danger">
              <ErrorMessage name="password" />
            </p>
          </div>
          <div className="form-check form-check-inline">
            <Field
              className="form-check-input"
              type="checkbox"
              value="technical"
              name="fields"
            />
            <label className="form-check-label" htmlFor="technical">
              Technical
            </label>
          </div>
          <div className="form-check form-check-inline">
            <Field
              className="form-check-input"
              type="checkbox"
              value="sports"
              name="fields"
            />
            <label className="form-check-label">Sports</label>
          </div>
          <div className="form-check form-check-inline">
            <Field
              className="form-check-input"
              type="checkbox"
              value="general"
              name="fields"
            />
            <label className="form-check-label">General</label>
          </div>
          <p className="text-danger">
            <ErrorMessage name="fields" />
          </p>
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
