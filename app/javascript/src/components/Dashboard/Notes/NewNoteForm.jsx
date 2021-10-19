import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Formik, Form } from "formik";
import { Input, Select } from "neetoui/formik";
import { Button, Label } from "neetoui/v2";

import notesApi from "apis/notes";
import FORM_INITIAL_VALUES from "constants/formInitialValues";
import FORM_SELECT_OPTIONS from "constants/formSelectOptions";
import FORM_VALIDATION_SCHEMAS from "constants/formValidationSchemas";

export default function NewNoteForm({ onClose, refetch }) {
  const handleSubmit = async values => {
    try {
      await notesApi.create(values);
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };
  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES.addNoteForm}
      onSubmit={handleSubmit}
      validationSchema={FORM_VALIDATION_SCHEMAS.addNoteForm}
    >
      {({ isSubmitting, handleChange }) => (
        <Form>
          <div className="px-10">
            <Input
              label={<Label required>Title</Label>}
              name="title"
              placeholder="Enter note title"
              className="mb-6"
            />
            <Input
              label={<Label required>Description</Label>}
              name="description"
              placeholder="Enter note description"
              className="mb-6"
            />
            <Select
              label={<Label required>Assigned Contact</Label>}
              name="assigned-contact"
              options={FORM_SELECT_OPTIONS.addNoteForm.assignedContact}
              onChange={({ value }) => handleChange("assigned-contact")(value)}
              placeholder="Select a Contact"
              className="mb-6"
            />
            <Select
              label={<Label required>Tags</Label>}
              name="tags"
              options={FORM_SELECT_OPTIONS.addNoteForm.tags}
              onChange={({ value }) => handleChange("tags")(value)}
              placeholder="Select a Tag"
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
