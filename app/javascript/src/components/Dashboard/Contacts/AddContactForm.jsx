import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Formik, Form } from "formik";
import { Button, Label } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { ADD_CONTACT_FORM } from "./constants";

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
      initialValues={ADD_CONTACT_FORM.INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={ADD_CONTACT_FORM.VALIDATION_SCHEMA}
    >
      {({ isSubmitting, handleChange }) => (
        <Form>
          <div className="px-10 mt-2 space-y-6 neeto-form-fields">
            <div className="flex">
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
            />
            <Select
              label={<Label required>Role</Label>}
              name="role"
              options={ADD_CONTACT_FORM.SELECT_OPTIONS.roles}
              onChange={({ value }) => handleChange("role")(value)}
              placeholder="Select a Contact"
            />
          </div>

          <div className="absolute bottom-0 w-full px-10 py-8">
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
