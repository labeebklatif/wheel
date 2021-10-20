import React from "react";

import { Toastr } from "neetoui";
import { Sidebar } from "neetoui/layouts";
import { withRouter } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";

import { NAVIGATION_ITEMS } from "./constants";

const NavBar = () => {
  const authDispatch = useAuthDispatch();
  const handleLogout = async () => {
    try {
      await authenticationApi.logout();
      authDispatch({ type: "LOGOUT" });
      resetAuthTokens();
      window.location.href = "/";
    } catch (error) {
      Toastr.error(error);
    }
  };

  return (
    <Sidebar
      navLinks={NAVIGATION_ITEMS}
      profileInfo={{
        dropdownProps: [
          {
            label: "Edit",
            onClick: function noRefCheck() {}
          },
          {
            label: "Logout",
            onClick: handleLogout
          }
        ],
        imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
        name: "Oliver Smith"
      }}
    />
  );
};

export default withRouter(NavBar);
