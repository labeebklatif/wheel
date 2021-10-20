import React from "react";

import { Modal, Button, Typography } from "neetoui";

export default function DeleteAlert({
  isOpen,
  title,
  content,
  onConfirm,
  onClose
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <Modal.Header>
        <Typography style="h2">{title}</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          {content}
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button label="Continue" onClick={onConfirm} size="large" />
        <Button style="text" label="Cancel" onClick={onClose} size="large" />
      </Modal.Footer>
    </Modal>
  );
}
