import React from "react";

import { Pane, Typography } from "neetoui/v2";

import AddContactForm from "./AddContactForm";

export default function NewContactPane({ showPane, setShowPane, onSubmit }) {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <div className="px-10">
        <Pane.Header className="px-0">
          <Typography style="h2" weight="semibold">
            Add New Contact
          </Typography>
        </Pane.Header>
      </div>
      <AddContactForm onClose={onClose} onSubmit={onSubmit} />
    </Pane>
  );
}
