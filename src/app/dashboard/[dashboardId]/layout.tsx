export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    {children}
    <h2>User details</h2>
    </>
  )
}