import React from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Button, Label } from "neetoui";
import { Input, Select } from "neetoui/formik";

import notesApi from "apis/notes";

import { NEW_NOTE_FORM } from "./constants";

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
      initialValues={NEW_NOTE_FORM.INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={NEW_NOTE_FORM.VALIDATION_SCHEMA}
    >
      {({ isSubmitting, handleChange }) => (
        <Form className="divide-y divide-gray-400">
          <div className="px-10 space-y-6">
            <Input
              label={<Label required>Title</Label>}
              name="title"
              placeholder="Enter note title"
            />
            <Input
              label={<Label required>Description</Label>}
              name="description"
              placeholder="Enter note description"
            />
            <Select
              label={<Label required>Assigned Contact</Label>}
              name="assigned-contact"
              options={NEW_NOTE_FORM.SELECT_OPTIONS.assignedContact}
              onChange={({ value }) => handleChange("assigned-contact")(value)}
              placeholder="Select a Contact"
            />
            <Select
              label={<Label required>Tags</Label>}
              name="tags"
              options={NEW_NOTE_FORM.SELECT_OPTIONS.tags}
              onChange={({ value }) => handleChange("tags")(value)}
              placeholder="Select a Tag"
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
