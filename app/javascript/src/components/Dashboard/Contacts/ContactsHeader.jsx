import React from "react";

import { Search, Plus } from "@bigbinary/neeto-icons";
import { Button, Input } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";

const ContactsHeader = ({ activeCategory, onToggleMenu, addButtonProps }) => {
  const { label } = activeCategory;

  const actionBlock = (
    <>
      <Input
        placeholder="Search Name, Email, Phone Number, Ect."
        prefix={<Search size={16} />}
      />
      <Button
        className="mx-2 text-sm"
        label="Add Contact"
        style="primary"
        icon={() => <Plus size={18} className="ml-2" />}
        size="large"
        {...addButtonProps}
      />
    </>
  );

  return (
    <Header
      actionBlock={actionBlock}
      menuBarToggle={onToggleMenu}
      title={`${label} Contacts`}
    />
  );
};

export default ContactsHeader;
