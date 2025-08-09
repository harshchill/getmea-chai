"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from "react-toastify";
import { initiate, fetchuser, fetchpayments} from "@/actions/userActions";
import Router, { useRouter } from "next/navigation";

const PaymentPage = ({ username }) => {
  // useState to manage paymentform
  const [paymentform, setpaymentform] = useState({
    name: "",
    amount: "",
    message: "",
  });
  const [currentUser, setcurrentUser] = useState({});
  const [payments, setpayments] = useState([]);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(()=>{
    if(searchParams.get("paymentdone")=="true"){

      toast.success('thanks for your donation!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  },[]);

  // handle change in the input fields
  const handlechange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  //fetch data of payment and user
  const fetchData = async () => {
    let u = await fetchuser(username);
    setcurrentUser(u);

    let p = await fetchpayments(username);
    setpayments(p);

  };

  // main payment function
  const pay = async (amount) => {
    // check if name is provided or not
    if (!paymentform.name || paymentform.name.trim() === "") {
      alert("Please enter your name before making a payment.");
    }

    //get orderID from initiate function
    // initiate function returns an order object
    let a = await initiate(amount, username, paymentform);
    let orderID = a.id;
    var options = {
      key: currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Get me a Chai",
      description: "Test Transaction",
      image:
        "https://i.pinimg.com/736x/1c/fd/ee/1cfdeeeaff94812b893e8000b992b472.jpg",
      order_id: orderID, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "/api/razorpay",
      prefill: {
        name: currentUser.name,
        email: currentUser.email,
        contact: "9992100001",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div>
        <div className="-z-10 relative">
          <img
            className=" mt-4 z-10 w-screen h-[38vh] md:h-[52vh] object-cover "
            src={currentUser.coverpic}
            alt=""
          />
          <img
            className="absolute left-[36%] md:left-[45%] size-40 object-cover rounded-full ring-2 ring-slate-300 -bottom-20"
            src={currentUser.profilepic}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-1 justify-center items-center mt-24  text-white">
          <span className="text-3xl font-bold m-2">@{username}</span>
          <span className="text-slate-400">
            Get {username} a chai
          </span>
          <span className="text-slate-400">
           {payments.length} Payments | Total Fund Raised: ₹{payments.reduce((sum, p) => sum + (p.amount || 0), 0) / 100}
          </span>
        </div>
        <div className="mt-16 p-2 md:h-[50vh] flex-col md:flex-row flex justify-center items-center gap-8 ">
          <div className="bg-slate-800 rounded-lg p-2 w-full md:w-[40%] min-h-full ring ring-slate-600 ">
            <span className="text-lg text-slate-200 font-semibold flex flex-col  items-center">
              <img className="invert" width={40} src="./fans.gif" alt="" />{" "}
              Supporters
            </span>
            <ul className="w-[96%]  flex flex-col gap-1 mt-4 h-[34vh] mx-auto overflow-y-auto text-white ">
              {payments.length == 0 && <li> gimme some fund bro</li>}
              {/* dynamically display supporters  */}
              {payments.map((p, u) => {
                return (
                  <li
                    key={u}
                    className="flex gap-1 items-center text-slate-400"
                  >
                    <img
                      className="invert"
                      width={30}
                      src="./profile.gif"
                      alt=""
                    />
                    <span className="text-white font-bold">{p.name}</span>{" "}
                    donated{" "}
                    <span className="text-white font-bold">
                      ₹{p.amount / 100}
                    </span>{" "}
                    with a message
                    <span className="text-white font-semibold">
                      &quot;{p.message}&quot;
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="bg-slate-800 rounded-lg p-2 w-full md:w-1/2 min-h-full ring ring-slate-600">
            <span className="text-lg text-slate-200 font-semibold flex flex-col  items-center">
              <img className="invert" width={40} src="./fund.gif" alt="" /> Fund
              Creator
            </span>
            <div className="flex items-center flex-col gap-2 mt-6">
              <input
                onChange={handlechange}
                value={paymentform.name}
                placeholder="Enter Name"
                name="name"
                type="text"
                className="input-dark"
              />
              <input
                onChange={handlechange}
                value={paymentform.amount}
                placeholder="Enter Amount"
                name="amount"
                type="text"
                className="input-dark"
              />
              <input
                onChange={handlechange}
                value={paymentform.message}
                placeholder="Enter Message"
                name="message"
                type="text"
                className="input-dark"
              />
              <button
                onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
                className=" m-2 w-fit bg-blue-500 hover:bg-blue-700 rounded-md px-4 py-2 text-white font-bold"
              >
                Fund
              </button>
            </div>
            <div className="w-4/5 md:w-1/2 mx-auto flex justify-around items-center mt-2 text-slate-400">
              <button
                onClick={() => pay(1000)}
                className="bg-slate-700 border border-slate-400 px-2 py-1 rounded-md"
              >
                Fund ₹10
              </button>
              <button
                onClick={() => pay(2000)}
                className="bg-slate-700 border border-slate-400 px-2 py-1 rounded-md"
              >
                Fund ₹20
              </button>
              <button
                onClick={() => pay(3000)}
                className="bg-slate-700 border border-slate-400 px-2 py-1 rounded-md"
              >
                Fund ₹30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
