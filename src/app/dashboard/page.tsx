import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DashboardPage() {
  return (
    <div className="container mt-5">
      {/* Page Header */}
      <h1 className="text-center mb-4">User Dashboard</h1>
      
      {/* Try to implement parallel routing using @ 'slots', this is better since no imports are needed */}

      {/* Current Balance Section */}
      <div className="mb-4">
        <h3 className="text-center">Current Balance:</h3>
        <div className="text-center">
          <span className="h4">₹1,250.00</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="d-flex justify-content-center gap-3 mb-4">
        <button className="btn btn-warning p-3 w-25">Withdraw</button>
        <button className="btn btn-success p-3 w-25">Deposit</button>
      </div>

      {/* Logout Link */}
      <div className="text-center">
        <Link href="/logout" className="btn btn-danger p-2">
          Logout
        </Link>
      </div>
    </div>
  );
}
