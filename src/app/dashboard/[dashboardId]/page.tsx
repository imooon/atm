// in order to use this import, not-found.tsx must be there in the relevant folder, NotFound does not accept props
// import { notFound } from "next/navigation";

// route parameters through params prop
export default async function DashboardDetails ({ 
  params  
}: {
  // type of params is a promise, which resolves into an object, containing dynamic segments as key-value pairs 
  params: Promise<{ dashboardId: string }>;
}) {
  const dashboardId = (await params).dashboardId;
  return (
    <>
    <h1>User details here {dashboardId}</h1>
    </>
  )
}