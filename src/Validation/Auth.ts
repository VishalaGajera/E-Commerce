import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const signupSchema = Yup.object().shape({
  firstname: Yup.string()
    .required("First Name is required")
    .matches(/^[A-Za-z]+$/, "First Name can only contain letters")
    .min(3, "First Name must be at least 3 characters"),
  lastname: Yup.string()
    .required("Last Name is required")
    .matches(/^[A-Za-z]+$/, "Last Name can only contain letters")
    .min(3, "Last Name must be at least 3 characters"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+{};:,<.>]).{6,}$/,
      "Password must include uppercase, lowercase, number, and special character"
    )
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
