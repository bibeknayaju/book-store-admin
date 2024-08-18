import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "./DefaultLayout.css";
import Navbar from "./Navbar";
import DashSidebar from "./DashSidebar";

const DefaultLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 992);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <DashSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        isLargeScreen={isLargeScreen}
      />

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          marginLeft: isLargeScreen ? "18rem" : "0",
          overflowY: "auto",
        }}>
        <Segment basic>
          <Navbar
            isLargeScreen={isLargeScreen}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </Segment>

        {/* Main Content */}
        <Segment basic>{children}</Segment>

        {/* Overlay for closing sidebar on small screens */}
        {sidebarOpen && !isLargeScreen && (
          <div
            onClick={() => setSidebarOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 40,
            }}></div>
        )}
      </div>
    </div>
  );
};

export default DefaultLayout;
