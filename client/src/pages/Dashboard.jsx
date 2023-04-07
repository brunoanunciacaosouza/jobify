import { useEffect } from "react";

const Dashboard = () => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/");
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
