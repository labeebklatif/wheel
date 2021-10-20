import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

import CONTACT_CATEGORIES from "constants/contactCategories";

const { byUserTypes, bySegments, byTags } = CONTACT_CATEGORIES;

const ContactsCategories = ({
  selectedCategory,
  onChangeCategory,
  visible
}) => {
  const [isRegionSearchCollapsed, setRegionSearchCollapsed] = useState(true);
  const [isTagsSearchCollapsed, setTagsSeachCollapsed] = useState(true);

  return (
    <MenuBar showMenu={visible} title="Contacts">
      {byUserTypes.map(menuItem => {
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
            onClick: () => setRegionSearchCollapsed(!isRegionSearchCollapsed)
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
        collapse={isRegionSearchCollapsed}
        onCollapse={() => setRegionSearchCollapsed(true)}
      />
      {bySegments.map(menuItem => {
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
            onClick: () => setTagsSeachCollapsed(!isTagsSearchCollapsed)
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
        collapse={isTagsSearchCollapsed}
        onCollapse={() => setTagsSeachCollapsed(true)}
      />
      {byTags.map(menuItem => {
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
