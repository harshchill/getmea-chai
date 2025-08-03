
import React from "react";
import PaymentPage from "@/components/PaymentPage";

const username = async ({ params }) => {
  return (
    <PaymentPage username={params.username}/>
  );
};

export default username;
