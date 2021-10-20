import React, { useState } from "react";

import { Modal, Button, Typography } from "neetoui/v2";

export default function DeleteContactAlert({ isOpen, onClose, onConfirm }) {
  const [deleting, setDeleting] = useState(false);
  const handleDelete = async () => {
    try {
      setDeleting(true);
      onConfirm();
    } catch (error) {
      logger.error(error);
    } finally {
      setDeleting(false);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <Modal.Header>
        <Typography style="h2">Delete Note</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          Are you sure you want to delete the note? This action cannot be
          undone.
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button
          label="Continue"
          onClick={handleDelete}
          size="large"
          loading={deleting}
        />
        <Button style="text" label="Cancel" onClick={onClose} size="large" />
      </Modal.Footer>
    </Modal>
  );
}
