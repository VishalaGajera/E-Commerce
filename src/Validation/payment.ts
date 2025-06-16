import * as yup from "yup";

export const orderSchema = yup.object().shape({
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



// // Validation Schema
// const orderSchema = yup.object({
//   email: yup.string().email("Invalid email").required("Email is required"),
//   phone: yup.string().required("Phone number is required"),
//   firstName: yup.string().required("First name is required"),
//   lastName: yup.string().required("Last name is required"),
//   city: yup.string().required("City is required"),
//   district: yup.string().required("District is required"),
//   streetAddress: yup.string().required("Street address is required"),
//   shippingMethod: yup.string().required("Shipping method is required"),
//   paymentMethod: yup.string().required("Payment method is required"),
//   // Conditional validation for payment fields
//   cardName: yup.string().when("paymentMethod", {
//     is: "creditcard",
//     then: (schema) => schema.required("Card name is required"),
//     otherwise: (schema) => schema.notRequired(),
//   }),
//   cardNumber: yup.string().when("paymentMethod", {
//     is: "creditcard",
//     then: (schema) => schema.required("Card number is required").min(16, "Card number must be 16 digits"),
//     otherwise: (schema) => schema.notRequired(),
//   }),
//   expiry: yup.string().when("paymentMethod", {
//     is: "creditcard",
//     then: (schema) => schema.required("Expiry date is required"),
//     otherwise: (schema) => schema.notRequired(),
//   }),
//   cvv: yup.string().when("paymentMethod", {
//     is: "creditcard",
//     then: (schema) => schema.required("CVV is required").min(3, "CVV must be 3 digits"),
//     otherwise: (schema) => schema.notRequired(),
//   }),
//   phonepeNumber: yup.string().when("paymentMethod", {
//     is: "phonepe",
//     then: (schema) => schema.required("PhonePe number is required"),
//     otherwise: (schema) => schema.notRequired(),
//   }),
//   googlePayId: yup.string().when("paymentMethod", {
//     is: "googlepay",
//     then: (schema) => schema.required("Google Pay ID is required"),
//     otherwise: (schema) => schema.notRequired(),
//   }),
// });
