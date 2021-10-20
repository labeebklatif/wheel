import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader } from "neetoui";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import DeleteAlert from "./DeleteAlert";
import { getInitialNoteCategory } from "./helpers";
import NewNotePane from "./NewNotePane";
import NotesCategories from "./NotesCategories";
import NotesHeader from "./NotesHeader";
import NotesList from "./NotesList";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [isNewNotePaneOpen, setIsNewNotePaneOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isCategoryPaneOpen, setIsCategoryPaneOpen] = useState(true);
  const [selectedNoteCategory, setSelectedNoteCategory] = useState(
    getInitialNoteCategory()
  );
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await notesApi.fetch();
      setNotes(response.data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      {notes.length ? (
        <div className="flex w-full">
          <NotesCategories
            visible={isCategoryPaneOpen}
            selectedCategory={selectedNoteCategory}
            onChangeCategory={setSelectedNoteCategory}
          />
          <div className="flex-1 p-4">
            <NotesHeader
              activeCategory={selectedNoteCategory}
              onToggleMenu={() => setIsCategoryPaneOpen(!isCategoryPaneOpen)}
              addButtonProps={{
                onClick: () => setIsNewNotePaneOpen(true)
              }}
            />
            <NotesList
              notes={notes}
              noteApi={{ onDelete: () => setIsDeleteAlertOpen(true) }}
            />
          </div>
        </div>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          title="Looks like you don't have any notes!"
          subtitle="Add your notes to send customized emails to them."
          primaryAction={() => setIsNewNotePaneOpen(true)}
          primaryActionLabel="Add New Note"
        />
      )}
      <NewNotePane
        showPane={isNewNotePaneOpen}
        setShowPane={setIsNewNotePaneOpen}
        fetchNotes={fetchNotes}
      />
      {isDeleteAlertOpen && (
        <DeleteAlert
          selectedNoteIds={[]}
          onClose={() => setIsDeleteAlertOpen(false)}
          refetch={fetchNotes}
        />
      )}
    </>
  );
};

export default Notes;
