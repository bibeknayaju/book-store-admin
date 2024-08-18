import React from "react";
import DefaultLayout from "../Components/DefaultLayout";
import { Route, Routes } from "react-router-dom";
import HomeComponent from "../Components/HomeComponent";
import ProductComponent from "../Components/ProductComponent";
import CustomerComponent from "../Components/CustomerComponent";
import OrderComponent from "../Components/OrderComponent";
import DeliveryComponent from "../Components/DeliveryComponent";
import FlashSalesComponent from "../Components/FalshSalesComponent";
import CouponComponent from "../Components/CouponComponent";
import ReportsComponent from "../Components/ReportsComponent";

function Dashboard() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/products" element={<ProductComponent />} />
        <Route path="/customers" element={<CustomerComponent />} />
        <Route path="/order-list" element={<OrderComponent />} />
        <Route path="/delivery" element={<DeliveryComponent />} />
        <Route path="/flash-sales" element={<FlashSalesComponent />} />
        <Route path="/coupon" element={<CouponComponent />} />
        <Route path="/report" element={<ReportsComponent />} />
      </Routes>
    </DefaultLayout>
  );
}

export default Dashboard;
