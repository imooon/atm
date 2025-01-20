//changing into client component
"use client";
import Link from "next/link";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// import {useRouter} from "next/navigation";
// import { axios } from "axios";

export default function RegisterPage() {
  const [user, setUser] = React.useState({
    account: "",
    name: "",
    email: "",
    password: "",
  });

  const onRegister = async () => {
    console.log(user);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Register</h1>
      <hr />
      
      <form>
        {/* Account Input */}
        <div className="mb-3">
          <label htmlFor="account" className="form-label">
            Account
          </label>
          <input
            id="account"
            type="text"
            className="form-control"
            value={user.account}
            // grabbing event and calling setUser to update variable user
            onChange={(e) => setUser({ ...user, account: e.target.value })}
            placeholder="Account Number"
          />
        </div>

        {/* Name Input */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Your Name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Your Email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Your Password"
          />
        </div>

        {/* Register Button */}
        <button 
          onClick={onRegister}
          className="btn btn-primary w-100 p-2"
        >
          Register Here
        </button>
      </form>

      {/* Link to Login Page */}
      <div className="mt-3 text-center">
        <Link href="/login" className="btn btn-link">
          Visit Login Page
        </Link>
      </div>
    </div>
  );
}
