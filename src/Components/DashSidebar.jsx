import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar, Menu, Icon } from "semantic-ui-react";
import { RxDashboard } from "react-icons/rx";
import { LuShoppingBag } from "react-icons/lu";
import { GoTag } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { CiBoxList } from "react-icons/ci";
import { FiPieChart } from "react-icons/fi";
import { CiShoppingTag } from "react-icons/ci";
import { IoChatboxOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiBlackBook } from "react-icons/gi";

const items = [
  {
    id: 1,
    name: "Dashboard",
    icon: <RxDashboard />,
    link: "/",
  },
  {
    id: 2,
    name: "Products",
    icon: <LuShoppingBag />,
    link: "/products",
  },
  {
    id: 3,
    name: "Flash Sales",
    icon: <GoTag />,
    link: "/flash-sales",
  },
  {
    id: 4,
    name: "Customers",
    icon: <LuUsers />,
    link: "/customers",
  },
  {
    id: 5,
    name: "Order List",
    icon: <CiBoxList />,
    link: "/order-list",
  },
  {
    id: 6,
    name: "Delivery",
    icon: <CiDeliveryTruck />,
    link: "/delivery",
  },
  {
    id: 7,
    name: "Report",
    icon: <FiPieChart />,
    link: "/report",
  },
  {
    id: 8,
    name: "Coupon",
    icon: <CiShoppingTag />,
    link: "/coupon",
  },
  {
    id: 9,
    name: "Chat",
    icon: <IoChatboxOutline />,
    link: "/chat",
  },
  {
    id: 10,
    name: "Settings",
    icon: <CiSettings />,
    link: "/settings",
  },
];

function DashSidebar({ isLargeScreen, setSidebarOpen, sidebarOpen }) {
  const location = useLocation();

  return (
    <Sidebar
      as={Menu}
      style={{
        backgroundColor: "#f6f6f6",
        width: "18rem",
        boxShadow: "none",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
      className="sidebar"
      animation="overlay"
      icon="labeled"
      onHide={() => setSidebarOpen(false)}
      vertical
      visible={isLargeScreen || sidebarOpen}>
      <Menu.Item as="a" header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "4rem",
            color: "#000",
            gap: "0.5rem",
          }}>
          <GiBlackBook
            style={{
              fontSize: "25px",
              color: "#6943BE",
            }}
          />
          <span style={{ fontSize: "25px" }}>
            Book <span style={{ color: "#" }}>Store</span>
          </span>
        </div>
      </Menu.Item>
      {items.map((item) => {
        const isActive = location?.pathname === item?.link;
        return (
          <Menu.Item
            key={item.id}
            as={Link}
            to={item.link}
            className="sidebar_menu"
            style={{
              borderRadius: isActive ? "0 10px 10px 0 !important" : "",
              backgroundColor: isActive ? "#F6F1FF" : "",
              color: isActive ? "#000" : "",
              borderLeft: isActive ? "4px solid #6943BE" : "",
              padding: "1rem",
            }}>
            <div className="sidebar_div">
              {item.icon}
              <span>{item.name}</span>
            </div>
          </Menu.Item>
        );
      })}
    </Sidebar>
  );
}

export default DashSidebar;
