import React, { useState, useRef } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";

import EmptyState from "components/Common/EmptyState";
import { getInitialContactCategory } from "helpers/contacts";

import DeleteContactAlert from "./ContactDeleteAlert";
import ContactsCategories from "./ContactsCategories";
import ContactsHeader from "./ContactsHeader";
import ContactsTable from "./ContactsTable";
import NewContactPane from "./NewContactPane";

const Contacts = () => {
  const [contactsList, setContactsList] = useState([]);
  const [showCategoryPane, setShowCategoryPane] = useState(false);
  const [showAddContactPane, setShowAddContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedContactCategory, setSelectedContactCategory] = useState(
    getInitialContactCategory()
  );
  const selectedContact = useRef(null);

  const contactsApi = {
    add: contact => {
      contact.id = Date.now();
      contact.created_at = new Date();
      // @ts-ignore
      setContactsList([...contactsList, contact]);
    },
    delete: contact => {
      const nextContacts = contactsList.filter(({ id }) => id !== contact.id);
      // @ts-ignore
      setContactsList(nextContacts);
    }
  };

  const onSubmitNewContact = values => {
    contactsApi.add(values);
    setShowAddContactPane(false);
  };
  const onDeleteContact = contact => {
    selectedContact.current = contact;
    setShowDeleteAlert(true);
  };
  const onConfirmDeleteContact = () => {
    if (!selectedContact.current) return;
    contactsApi.delete(selectedContact.current);
    setShowDeleteAlert(false);
  };

  return (
    <>
      {contactsList.length ? (
        <div className="flex w-full">
          <ContactsCategories
            visible={showCategoryPane}
            selectedCategory={selectedContactCategory}
            onChangeCategory={setSelectedContactCategory}
          />
          <div className="flex-1 p-4">
            <ContactsHeader
              activeCategory={selectedContactCategory}
              onToggleMenu={() => setShowCategoryPane(!showCategoryPane)}
              addButtonProps={{
                onClick: () => setShowAddContactPane(true)
              }}
            />
            <ContactsTable contacts={contactsList} onDelete={onDeleteContact} />
          </div>
        </div>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          title="Looks like you don't have any contacts!"
          subtitle="Add your contacts to show list."
          primaryAction={() => setShowAddContactPane(true)}
          primaryActionLabel="Add New Contact"
        />
      )}
      <NewContactPane
        showPane={showAddContactPane}
        setShowPane={setShowAddContactPane}
        onSubmit={onSubmitNewContact}
      />
      <DeleteContactAlert
        isOpen={showDeleteAlert}
        onClose={() => setShowDeleteAlert(false)}
        onConfirm={onConfirmDeleteContact}
      />
    </>
  );
};

export default Contacts;
