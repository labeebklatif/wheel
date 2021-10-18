import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";

import EmptyState from "components/Common/EmptyState";
import { getInitialContactCategory } from "helpers/contacts";

import ContactsCategories from "./ContactsCategories";
import ContactsHeader from "./ContactsHeader";
import ContactsTable from "./ContactsTable";

const Contacts = () => {
  const [contactsList, setContactsList] = useState(
    Array(10).fill({
      name: "Oliver Smith",
      email: "oliver@smith.com",
      created_at: new Date(),
      type: "Owner"
    })
  );
  const [showCategoryPane, setShowCategoryPane] = useState(false);
  const [showAddContactPane, setShowAddContactPane] = useState(false);
  const [selectedContactCategory, setSelectedContactCategory] = useState(
    getInitialContactCategory()
  );

  const addContact = contact => {
    contact.id = Date.now();
    // @ts-ignore
    setContactsList([...contactsList, contact]);
  };
  const deleteContact = contact => {
    const nextContacts = contactsList.filter(({ id }) => id !== contact.id);
    // @ts-ignore
    setContactsList(nextContacts);
  };

  const contactsApi = {
    add: addContact,
    delete: deleteContact
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
            <ContactsTable contacts={contactsList} contactsApi={contactsApi} />
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
      {showAddContactPane ? null : null}
    </>
  );
};

export default Contacts;
