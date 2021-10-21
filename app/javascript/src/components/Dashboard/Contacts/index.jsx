import React, { useState, useRef } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";

import Alert from "components/Common/Alert";
import EmptyState from "components/Common/EmptyState";

import ContactsCategories from "./ContactsCategories";
import ContactsHeader from "./ContactsHeader";
import ContactsTable from "./ContactsTable";
import { getInitialContactCategory } from "./helpers";
import NewContactPane from "./NewContactPane";

const Contacts = () => {
  const [contactsList, setContactsList] = useState([]);
  const [isCategoryPaneOpen, setIsCategoryPaneOpen] = useState(false);
  const [isAddContactPaneOpen, setIsAddContactPaneOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [selectedContactCategory, setSelectedContactCategory] = useState(
    getInitialContactCategory()
  );
  const selectedContact = useRef(null);
  const isEditing = useRef(false);

  const contactsApi = {
    add: contact => {
      contact.id = Date.now();
      contact.created_at = new Date();
      // @ts-ignore
      setContactsList([...contactsList, contact]);
    },
    edit: (contact, newContact) => {
      const indexOfContact = contactsList.indexOf(contact);
      if (indexOfContact >= 0) {
        const nextContacts = [...contactsList];
        newContact.id = contact.id;
        newContact.created_at = contact.created_at;
        nextContacts[indexOfContact] = newContact;
        setContactsList(nextContacts);
      }
    },
    delete: contact => {
      const nextContacts = contactsList.filter(({ id }) => id !== contact.id);
      // @ts-ignore
      setContactsList(nextContacts);
    }
  };

  const onCloseAddContactPane = () => {
    isEditing.current = false;
    selectedContact.current = null;
    setIsAddContactPaneOpen(false);
  };
  const onSubmitNewContact = values => {
    if (isEditing.current && selectedContact.current) {
      contactsApi.edit(selectedContact.current, values);
    } else {
      contactsApi.add(values);
    }
    onCloseAddContactPane();
  };
  const onEditContact = contact => {
    isEditing.current = true;
    selectedContact.current = contact;
    setIsAddContactPaneOpen(true);
  };
  const onDeleteContact = contact => {
    selectedContact.current = contact;
    setIsDeleteAlertOpen(true);
  };
  const onCloseDeleteAlert = () => {
    selectedContact.current = null;
    setIsDeleteAlertOpen(false);
  };
  const onConfirmDeleteContact = () => {
    if (!selectedContact.current) return;
    contactsApi.delete(selectedContact.current);
    onCloseDeleteAlert();
  };

  return (
    <>
      {contactsList.length ? (
        <div className="flex w-full">
          <ContactsCategories
            visible={isCategoryPaneOpen}
            selectedCategory={selectedContactCategory}
            onChangeCategory={setSelectedContactCategory}
          />
          <div className="flex-1 p-4">
            <ContactsHeader
              activeCategory={selectedContactCategory}
              onToggleMenu={() =>
                setIsCategoryPaneOpen(isCategoryPaneOpen => !isCategoryPaneOpen)
              }
              addButtonProps={{
                onClick: () => setIsAddContactPaneOpen(true)
              }}
            />
            <ContactsTable
              contacts={contactsList}
              onDelete={onDeleteContact}
              onEdit={onEditContact}
            />
          </div>
        </div>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          title="Looks like you don't have any contacts!"
          subtitle="Add your contacts to show list."
          primaryAction={() => setIsAddContactPaneOpen(true)}
          primaryActionLabel="Add New Contact"
        />
      )}
      <NewContactPane
        showPane={isAddContactPaneOpen}
        onClose={onCloseAddContactPane}
        onSubmit={onSubmitNewContact}
        isEditing={isEditing.current}
        selectedContact={selectedContact.current}
      />
      <Alert
        isOpen={isDeleteAlertOpen}
        onConfirm={onConfirmDeleteContact}
        onClose={onCloseDeleteAlert}
        title="Delete Contact"
        content="Are you sure you want to delete the contact? This action cannot be
        undone."
      />
    </>
  );
};

export default Contacts;
