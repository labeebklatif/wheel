import React from "react";

import dayjs from "dayjs";
import relativeTimePlugin from "dayjs/plugin/relativeTime";
import { Typography, Button, Avatar, Tooltip } from "neetoui";

import Card from "components/Common/Card";

dayjs.extend(relativeTimePlugin);

const ListItem = ({ item, onEdit, onDelete }) => {
  const {
    created_at,
    title,
    description,
    avatar = "https://picsum.photos/id/237/200/300"
  } = item;

  const createdDate = dayjs(created_at);

  return (
    <Card
      title={title}
      content={description}
      actions={[
        { label: "Edit", onClick: onEdit },
        { label: "Delete", onClick: onDelete }
      ]}
      footer={
        <Card.Footer className="justify-between">
          <Button
            style="secondary"
            label="Getting Started"
            className="h-1 text-xs text-gray-500 rounded"
          />
          <Tooltip
            content={createdDate.format("dddd, hh:MMA")}
            placement="bottom"
          >
            <div className="flex items-center">
              <Typography style="body3" className="px-2 text-gray-500">
                {`Drafted ${createdDate.fromNow()}`}
              </Typography>
              <Avatar
                user={{ imageUrl: avatar, name: "UNKNOWN" }}
                size="small"
              />
            </div>
          </Tooltip>
        </Card.Footer>
      }
    />
  );
};

export default ListItem;
