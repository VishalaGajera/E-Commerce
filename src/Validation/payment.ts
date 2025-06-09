import * as yup from "yup";

export const paymentSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  city: yup.string().required("City is required"),
  district: yup.string().required("District is required"),
  streetAddress: yup.string().required("Street address is required"),
  paymentMethod: yup.string().required("Payment method is required"),

  // Conditionally required based on paymentMethod
  cardName: yup.string().when("paymentMethod", ([method], schema) =>
    method === "creditcard" ? schema.required("Card name is required") : schema
  ),
  cardNumber: yup.string().when("paymentMethod", ([method], schema) =>
    method === "creditcard" ? schema.required("Card number is required") : schema
  ),
  expiry: yup.string().when("paymentMethod", ([method], schema) =>
    method === "creditcard" ? schema.required("Expiry is required") : schema
  ),
  cvv: yup.string().when("paymentMethod", ([method], schema) =>
    method === "creditcard" ? schema.required("CVV is required") : schema
  ),
  phonepeNumber: yup.string().when("paymentMethod", ([method], schema) =>
    method === "phonepe" ? schema.required("PhonePe number is required") : schema
  ),
  googlePayId: yup.string().when("paymentMethod", ([method], schema) =>
    method === "googlepay" ? schema.required("Google Pay ID is required") : schema
  ),
});
