import React from "react";

import classNames from "classnames";
import { MenuVertical } from "neetoicons";
import { Typography, Dropdown } from "neetoui";

const CardFooter = ({ children, className }) => (
  <div
    className={classNames({ [className]: className }, "flex items-center pt-4")}
  >
    {children}
  </div>
);

const Card = ({ title, content, actions, footer }) => {
  return (
    <div className="p-3 divide-y card__container">
      <div className="mb-2">
        <div className="flex items-center justify-between">
          <Typography style="h4" className="mb-1">
            {title}
          </Typography>
          {actions?.length ? (
            <Dropdown icon={MenuVertical} buttonStyle="icon" autoWidth>
              {actions.map(({ label, onClick }) => (
                <li key={label} onClick={onClick}>
                  {label}
                </li>
              ))}
            </Dropdown>
          ) : null}
        </div>
        <Typography style="body3" className="text-gray-500">
          {content}
        </Typography>
      </div>
      {footer}
    </div>
  );
};

Card.Footer = CardFooter;

export default Card;
