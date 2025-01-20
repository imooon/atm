import Link from "next/link";
// import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// params is a promise that resolves to an object containing the dynamic route parameters (like id)
// searchParams is a promise that resolves to an object containing the query parameters (like filters and sorting)

// async await for server components
// use hooks from React for client components

export default function Home() {
  return (
    <>
    <h1>Welcome home!</h1>
    <Link href="/login">Login</Link>
    </>
  )
}