import React from "react";

import { Settings, Edit, UserCircle } from "@bigbinary/neeto-icons";
import { Toastr } from "neetoui";
import { Sidebar } from "neetoui/v2/layouts";
import { withRouter } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";

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
      navLinks={[
        {
          icon: Edit,
          label: "Notes",
          to: "/notes"
        },
        {
          icon: UserCircle,
          label: "Contacts",
          to: "/contacts"
        },
        {
          icon: Settings,
          label: "Settings",
          to: "/settings"
        }
      ]}
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
