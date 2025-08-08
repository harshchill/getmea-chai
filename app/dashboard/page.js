"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { fetchuser, updateUser } from "@/actions/userActions";

const Dashboard = () => {
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
    
    toast.warning('Please Reload your page!', {
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
    <div className="text-white min-h-screen">
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
      <div className="container mx-auto px-4 md:px-8 py-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">Welcome to your dashboard</h1>
          <p className="text-slate-300 text-sm md:text-base">Create and customize your creator page</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form
            className="flex flex-col gap-6 form min-h-[50vh] w-full p-6 md:p-8 backdrop-blur-[2px] border border-slate-400 rounded-lg"
            onSubmit={handleSubmit}
          >
            <div className="text-center font-bold text-lg md:text-xl mb-4">Create Your Page</div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Enter name</label>
                <input
                  className="input w-full"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your display name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Enter Username</label>
                <input
                  className="input w-full"
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                  placeholder="your-username"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Profile URL</label>
                <input
                  className="input w-full"
                  type="text"
                  name="profilepic"
                  value={form.profilepic}
                  onChange={handleChange}
                  placeholder="https://example.com/profile.jpg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Cover URL</label>
                <input
                  className="input w-full"
                  type="text"
                  name="coverpic"
                  value={form.coverpic}
                  onChange={handleChange}
                  placeholder="https://example.com/cover.jpg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Razor Pay ID</label>
                <input
                  className="input w-full"
                  type="password"
                  name="razorpayid"
                  value={form.razorpayid}
                  onChange={handleChange}
                  placeholder="rzp_test_..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Razor Pay Secret</label>
                <input
                  className="input w-full"
                  type="password"
                  name="razorpaysecret"
                  value={form.razorpaysecret}
                  onChange={handleChange}
                  placeholder="Your Razorpay secret key"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 rounded-lg mt-6 w-full px-4 py-3 text-white font-semibold transition-colors"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
