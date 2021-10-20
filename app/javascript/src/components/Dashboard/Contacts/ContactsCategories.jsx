import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

import { CONTACT_CATEGORIES } from "./constants";

const { USER_TYPES, SEGMENTS, TAGS } = CONTACT_CATEGORIES;

const ContactsCategories = ({
  selectedCategory,
  onChangeCategory,
  visible
}) => {
  const [isRegionSearchOpened, setIsRegionSearchOpened] = useState(false);
  const [isTagsSearchOpened, setIsTagsSeachOpened] = useState(false);

  return (
    <MenuBar showMenu={visible} title="Contacts">
      {USER_TYPES.map(menuItem => {
        const { key, label, count } = menuItem;
        return (
          <MenuBar.Block
            key={key}
            label={label}
            count={count}
            active={menuItem === selectedCategory}
            onClick={() => onChangeCategory(menuItem)}
          />
        );
      })}

      <MenuBar.SubTitle
        iconProps={[
          {
            icon: () => <Search size={20} />,
            onClick: () =>
              setIsRegionSearchOpened(
                isRegionSearchOpened => !isRegionSearchOpened
              )
          }
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Segments
        </Typography>
      </MenuBar.SubTitle>
      <MenuBar.Search
        collapse={!isRegionSearchOpened}
        onCollapse={() => setIsRegionSearchOpened(false)}
      />
      {SEGMENTS.map(menuItem => {
        const { key, label, count } = menuItem;
        return (
          <MenuBar.Block
            key={key}
            label={label}
            count={count}
            active={menuItem === selectedCategory}
            onClick={() => onChangeCategory(menuItem)}
          />
        );
      })}

      <MenuBar.SubTitle
        iconProps={[
          {
            icon: () => <Settings size={20} />
          },
          {
            icon: () => <Plus size={20} />
          },
          {
            icon: () => <Search size={20} />,
            onClick: () =>
              setIsTagsSeachOpened(isTagsSearchOpened => !isTagsSearchOpened)
          }
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Tags
        </Typography>
      </MenuBar.SubTitle>
      <MenuBar.Search
        collapse={!isTagsSearchOpened}
        onCollapse={() => setIsTagsSeachOpened(false)}
      />
      {TAGS.map(menuItem => {
        const { key, label, count } = menuItem;
        return (
          <MenuBar.Block
            key={key}
            label={label}
            count={count}
            active={menuItem === selectedCategory}
            onClick={() => onChangeCategory(menuItem)}
          />
        );
      })}
    </MenuBar>
  );
};

export default ContactsCategories;
