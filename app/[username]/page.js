
import React from "react";
import PaymentPage from "@/components/PaymentPage";

const username = async ({ params ={} }) => {
  const b = await params
  return (
    <PaymentPage username={b.username}/>
  );
};

export default username;
