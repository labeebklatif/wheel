import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Formik, Form } from "formik";
import { Input, Select } from "neetoui/formik";
import { Button, Label } from "neetoui/v2";

import FORM_INITIAL_VALUES from "constants/formInitialValues";
import FORM_SELECT_OPTIONS from "constants/formSelectOptions";
import FORM_VALIDATION_SCHEMAS from "constants/formValidationSchemas";

export default function AddContactForm({ onClose, onSubmit }) {
  const handleSubmit = async values => {
    try {
      onSubmit(values);
    } catch (err) {
      logger.error(err);
    }
  };
  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES.addContactForm}
      onSubmit={handleSubmit}
      validationSchema={FORM_VALIDATION_SCHEMAS.addContactForm}
    >
      {({ isSubmitting, handleChange }) => (
        <Form>
          <div className="px-10 mt-2 neeto-form-fields">
            <div className="flex mb-6">
              <Input
                label={<Label required>First Name</Label>}
                name="firstName"
                placeholder="Enter first name"
              />
              <Input
                label={<Label required>Last Name</Label>}
                name="lastName"
                placeholder="Enter last name"
                className="ml-6"
              />
            </div>
            <Input
              label={<Label required>Email Address</Label>}
              name="email"
              placeholder="Enter email address"
              className="mb-6"
            />
            <Select
              label={<Label required>Role</Label>}
              name="role"
              options={FORM_SELECT_OPTIONS.addContactForm.roles}
              onChange={({ value }) => handleChange("role")(value)}
              placeholder="Select a Contact"
              className="mb-6"
            />
          </div>

          <div className="nui-pane__footer nui-pane__footer--absolute">
            <Button
              type="submit"
              label="Save Changes"
              size="large"
              style="primary"
              disabled={isSubmitting}
              loading={isSubmitting}
              icon={() => <Check size={20} className="ml-2" />}
              className="justify-around h-10"
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
              className="text-gray-500"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
