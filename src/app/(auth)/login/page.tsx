//changing into client component
"use client";
import Link from "next/link";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRouter} from "next/navigation";
// import Router from "next/router";
// import { axios } from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    account: "",
    password: "",
  });

  // Initialize the router
  const router = useRouter(); 

  const onLogin = async (e: React.FormEvent) => {
    // Prevent page reload on form submission
    e.preventDefault();  
    console.log("Successful login");
    // Use the router to navigate to the dashboard
    router.push("/dashboard");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Login</h1>
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

        {/* Login Button */}
        <button 
          onClick={onLogin}
          // type="submit"
          className="btn btn-primary w-100 p-2"
        >
          Login Here
        </button>
      </form>

      {/* Link to Register Page */}
      <div className="mt-3 text-center">
        <Link href="/register" className="btn btn-link">
          Visit Register Page
        </Link>
      </div>
    </div>
  );
}
