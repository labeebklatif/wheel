import React from "react";

import dayjs from "dayjs";
import relativeTimePlugin from "dayjs/plugin/relativeTime";
import { MenuHorizontal } from "neetoicons";
import { Checkbox, Dropdown, Pagination, Avatar, Typography } from "neetoui";
import { Container } from "neetoui/layouts";

dayjs.extend(relativeTimePlugin);

const TableRow = ({ contact, onDelete }) => {
  const { firstName, lastName, role, avatar, email, created_at } = contact;
  const fullName = `${firstName} ${lastName}`;
  const createdDate = dayjs(created_at);

  return (
    <tr>
      <td className="max-w-sm truncate">
        <Checkbox name="1" />
      </td>
      <td className="flex items-center max-w-sm truncate">
        <Avatar user={{ imageUrl: avatar, name: fullName }} size="large" />
        <div className="ml-3">
          <Typography style="h5" className="capitalize">
            {fullName}
          </Typography>
          <Typography style="body3" className="capitalize">
            {role}
          </Typography>
        </div>
      </td>
      <td className="max-w-sm truncate">{email}</td>
      <td className="max-w-sm truncate">{createdDate.format("MMM D, YYYY")}</td>
      <td className="max-w-sm truncate">
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

const ContactsTable = ({ contacts, onDelete }) => {
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
              onDelete={() => onDelete(contact)}
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
