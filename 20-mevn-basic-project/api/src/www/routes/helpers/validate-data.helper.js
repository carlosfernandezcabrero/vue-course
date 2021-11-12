import mongoose from "mongoose";
import ValidationException from "../../exceptions/validation.exception.js";

export const validateData = (newData, nameCollection) => {
  const Model = mongoose.model(nameCollection);
  const instance = new Model(newData);
  const response = instance.validateSync();
  if (response) {
    const exception = new ValidationException(getBadFields(response.errors));
    throw exception;
  }
};

function getBadFields(errors) {
  let errorsObject = {};
  Object.keys(errors).forEach(
    (key) =>
      (errorsObject = {
        ...errorsObject,
        [errors[key].properties.path]: {
          message: errors[key].properties.message
        }
      })
  );

  return errorsObject;
}
