import React from "react";

import { Search, Plus } from "neetoicons";
import { Button, Input } from "neetoui";
import { Header } from "neetoui/layouts";

const NotesHeader = ({ activeCategory, onToggleMenu, addButtonProps }) => {
  const { label } = activeCategory;

  const actionBlock = (
    <>
      <Input
        placeholder="Search Name, Email, Phone Number, Ect."
        prefix={<Search size={16} />}
      />
      <Button
        className="mx-2"
        label="Add Note"
        style="primary"
        icon={() => <Plus size={20} />}
        {...addButtonProps}
      />
    </>
  );

  return (
    <Header
      actionBlock={actionBlock}
      menuBarToggle={onToggleMenu}
      title={`${label} Notes`}
    />
  );
};

export default NotesHeader;
