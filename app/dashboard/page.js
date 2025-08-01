"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState ,useEffect } from "react";

const dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session]);

  const [form, setForm] = React.useState({
    fullName: "",
    email: "",
    username: "",
    profileUrl: "",
    coverUrl: "",
    razorPayId: "",
    razorPaySecret:""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic (API call, etc.)
    // alert("Form submitted!" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="text-white">
      <div className="text-center mt-6 text-2xl font-semibold">
        Welcome to your dashboard
      </div>
      <form className="flex flex-col gap-4 form min-h-[50vh] w-1/3 mx-auto m-4 p-4 backdrop-blur-[2px] border border-slate-400 rounded-md" onSubmit={handleSubmit}>
        <div className="text-center font-bold">Create Your page</div>
        <div>Enter Full name</div>
        <input className="input" type="text" name="fullName" value={form.fullName} onChange={handleChange} required />
        <div>Enter email</div>
        <input className="input" type="email" name="email" value={form.email} onChange={handleChange} required />
        <div>Enter Username</div>
        <input className="input" type="text" name="username" value={form.username} onChange={handleChange} required />
        <div>Profile URL</div>
        <input className="input" type="text" name="profileUrl" value={form.profileUrl} onChange={handleChange} />
        <div>Cover URL</div>
        <input className="input" type="text" name="coverUrl" value={form.coverUrl} onChange={handleChange} />
        <div>Razor Pay ID</div>
        <input className="input" type="text" name="razorPayId" value={form.razorPayId} onChange={handleChange} />
        <div>Razor Pay Secret</div>
        <input className="input" type="text" name="razorPaySecret" value={form.razorPaySecret} onChange={handleChange} />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 rounded-lg mt-4 w-full px-4 py-1 ">Save</button>
      </form>
    </div>
  );
};

export default dashboard;
