import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/useAuth";
import { Button } from "@/components/ui/button";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome, {user?.name}</p>

      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default Dashboard;
