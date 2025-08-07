"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { fetchuser, updateUser } from "@/actions/userActions";

const dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  useEffect(() => {
    if (session && session.user && session.user.name) {
      getUserData();
    }
  }, [session]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    profilepic: "",
    coverpic: "",
    razorpayid: "",
    razorpaysecret: "",
  });

  // Define defaultForm  to control form from changing uncontrollably
  const defaultForm = {
    name: "",
    email: "",
    username: "",
    profilepic: "",
    coverpic: "",
    razorpayid: "",
    razorpaysecret: "",
  };

  //find the user in the database
  const getUserData = async () => {
    const u = await fetchuser(session.user.name);
    setForm(u ? { ...defaultForm, ...u } : defaultForm);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!session || !session.user || !session.user.name) return;
    updateUser(form, session.user.name);
    toast.success('Profile updated!', {
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
  };

  return (
    <div className="text-white">
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
      <div className="text-center mt-6 text-2xl font-semibold">
        Welcome to your dashboard
      </div>
      <form
        className="flex flex-col gap-4 form min-h-[50vh] w-1/3 mx-auto m-4 p-4 backdrop-blur-[2px] border border-slate-400 rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="text-center font-bold">Create Your page</div>
        <div>Enter name</div>
        <input
          className="input"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <div>Enter Username</div>
        <input
          className="input"
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <div>Profile URL</div>
        <input
          className="input"
          type="text"
          name="profilepic"
          value={form.profilepic}
          onChange={handleChange}
        />
        <div>Cover URL</div>
        <input
          className="input"
          type="text"
          name="coverpic"
          value={form.coverpic}
          onChange={handleChange}
        />
        <div>Razor Pay ID</div>
        <input
          className="input"
          type="text"
          name="razorpayid"
          value={form.razorpayid}
          onChange={handleChange}
        />
        <div>Razor Pay Secret</div>
        <input
          className="input"
          type="text"
          name="razorpaysecret"
          value={form.razorpaysecret}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 rounded-lg mt-4 w-full px-4 py-1 "
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default dashboard;
