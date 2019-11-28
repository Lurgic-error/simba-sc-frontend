import { required, confirmed, length, email, min, max, numeric } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("required", {
  ...required,
  message: "This field is required"
});

extend("email", {
  ...email,
  message: "This field must be a valid email"
});

extend("confirmed", {
  ...confirmed,
  message: "This field confirmation does not match"
});

extend("length", {
  ...length,
  message: "This field must have 2 options"
});

extend("min", {
    ...min,
    message: "This field must more than the current characters"
  });

  
  extend("max", {
    ...max,
    message: "This field can not have that much characters"
  });
  

  extend("numeric", {
    ...numeric,
    message: "This field must can only have numbers"
  });
