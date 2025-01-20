import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "User Dashboard",
  },
};

// loading.tsx automatically wraps the nested children
export default async function Loading() {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve("Intentional delay");
    }, 1000)
  })
  return (
    <>
    <div>
      <h1>Loading...</h1>
    </div>
    </>
  )
}

// can use skeleton loaders or spinners