import React from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb } from "semantic-ui-react";

function BreadcrumbComponent() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const sections = [
    { key: "Dashboard", content: "Dashboard", link: true, href: "/" },
    ...pathnames.map((name, index) => {
      const isLast = index === pathnames.length - 1;
      const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
      return {
        key: name,
        content: name.charAt(0).toUpperCase() + name.slice(1),
        link: !isLast,
        active: isLast,
      };
    }),
  ];

  return (
    <div
      style={{
        padding: "1rem",
        borderBottom: "1px solid #d4d4d5",
      }}>
      <Breadcrumb icon="right angle" sections={sections} />
    </div>
  );
}

export default BreadcrumbComponent;
