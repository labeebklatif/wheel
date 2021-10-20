import React from "react";

import { Pane, Typography } from "neetoui";

import NewNoteForm from "./NewNoteForm";

export default function NewNotePane({ fetchNotes, showPane, setShowPane }) {
  const onClose = () => setShowPane(false);
  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <div className="px-10">
        <Pane.Header className="px-0">
          <Typography style="h2" weight="semibold">
            Add New Note
          </Typography>
        </Pane.Header>
      </div>
      <NewNoteForm onClose={onClose} refetch={fetchNotes} />
    </Pane>
  );
}
