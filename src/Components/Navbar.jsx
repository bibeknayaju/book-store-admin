// src/components/Navbar.js
import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Icon,
  Menu,
} from "semantic-ui-react";
import { CiBellOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setSidebarOpen, isLargeScreen, sidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const logoutFunction = () => {
    return {
      localStorage: localStorage.removeItem("isLoggedIn"),
      navigate: navigate("/login"),
    };
  };

  return (
    <div
      style={{
        borderBottom: "1px solid #d4d4d5",
        boxShadow: "0 1px 2px 0 rgba(34,36,38,.15)",
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}>
        {!isLargeScreen && (
          <div
            style={{
              padding: "1rem",
              fontSize: "1.5rem",
            }}>
            {sidebarOpen ? (
              <Icon name="times" onClick={() => setSidebarOpen(!sidebarOpen)} />
            ) : (
              <Icon name="bars" onClick={() => setSidebarOpen(!sidebarOpen)} />
            )}
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}>
            <span
              style={{
                paddingLeft: "1rem",
                fontSize: "25px",
                color: "#6943BE",
                textTransform: "capitalize",
              }}>
              {location.pathname.split("/")[1]
                ? location.pathname.split("/")[1]
                : "Dashboard"}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "4rem",
              color: "#6943BE",
            }}>
            <CiSearch
              style={{
                fontSize: "25px",
              }}
            />

            <CiBellOn
              style={{
                fontSize: "25px",
              }}
            />
            <Menu.Item
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              as="a"
              header>
              <img
                style={{
                  borderRadius: "50%",
                  height: "2rem",
                  width: "2rem",
                  objectFit: "contain",
                }}
                src="https://avatars.githubusercontent.com/u/19842736?v=4"
                size="small"
              />
              <Dropdown
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                text={"admin"}>
                <DropdownMenu>
                  {/* <DropdownItem text={item1} description={description1} /> */}
                  <DropdownItem
                    onClick={logoutFunction}
                    text={"Logout"}
                    description={""}
                  />
                </DropdownMenu>
              </Dropdown>

              {/* <Icon name="caret down" /> */}
            </Menu.Item>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
