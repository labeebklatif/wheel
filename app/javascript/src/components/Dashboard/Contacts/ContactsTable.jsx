import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import dayjs from "dayjs";
import relativeTimePlugin from "dayjs/plugin/relativeTime";
import { Checkbox, Dropdown, Pagination, Avatar, Typography } from "neetoui/v2";
import { Container } from "neetoui/v2/layouts";

dayjs.extend(relativeTimePlugin);

const TableRow = ({ contact, onDelete }) => {
  const { name, type, avatar, email, created_at } = contact;
  const createdDate = dayjs(created_at);

  return (
    <tr>
      <td>
        <Checkbox name="1" />
      </td>
      <td className="flex items-center">
        <Avatar user={{ imageUrl: avatar, name }} size="large" />
        <div className="ml-3">
          <Typography style="h5">{name}</Typography>
          <Typography style="body3">{type}</Typography>
        </div>
      </td>
      <td>{email}</td>
      <td>{createdDate.format("MMM D, YYYY")}</td>
      <td>
        <div className="flex flex-row items-center justify-end space-x-3">
          <Dropdown
            icon={() => <MenuHorizontal size={27} />}
            buttonStyle="icon"
            autoWidth
          >
            <li>Edit</li>
            <li onClick={onDelete}>Delete</li>
          </Dropdown>
        </div>
      </td>
    </tr>
  );
};

const ContactsTable = ({ contacts, contactsApi }) => {
  return (
    <Container>
      <table
        className={`neeto-ui-table neeto-ui-table--checkbox neeto-ui-table--actions`}
      >
        <thead>
          <tr>
            <th>
              <Checkbox name="header" />
            </th>
            <th>Name & Role</th>
            <th>Email</th>
            <th>Created At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <TableRow
              key={index}
              contact={contact}
              onDelete={() => contactsApi.delete(contact)}
            />
          ))}
        </tbody>
      </table>
      <div className="flex flex-row items-center justify-end w-full mt-6 mb-8">
        <Pagination count={300} pageNo={1} pageSize={25} navigate={() => {}} />
      </div>
    </Container>
  );
};

export default ContactsTable;
