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
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setSidebarOpen, isLargeScreen, sidebarOpen }) => {
  const navigate = useNavigate();

  const logoutFunction = () => {
    return {
      localStorage: localStorage.removeItem("isLoggedIn"),
      navigate: navigate("/login"),
    };
  };

  return (
    <div
      style={{
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
            <Link
              to={"/"}
              style={{
                paddingLeft: "1rem",
                fontSize: "15px",
                cursor: "pointer",
                color: "grey",
                textTransform: "capitalize",
              }}>
              {/* {location.pathname.split("/")[1]
                ? location.pathname.split("/")[1]
                : "Dashboard"} */}
              Dashboard
            </Link>
            <Link
              to={"/customers"}
              style={{
                paddingLeft: "1rem",
                fontSize: "15px",
                cursor: "pointer",
                color: "grey",
                textTransform: "capitalize",
              }}>
              Customers
            </Link>
            <Link
              to={"/products"}
              style={{
                paddingLeft: "1rem",
                fontSize: "15px",
                cursor: "pointer",
                color: "grey",
                textTransform: "capitalize",
              }}>
              Products
            </Link>
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
                  <DropdownItem
                    onClick={logoutFunction}
                    text={"Logout"}
                    description={""}
                  />
                </DropdownMenu>
              </Dropdown>
            </Menu.Item>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
