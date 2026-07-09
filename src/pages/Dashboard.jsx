import MainLayout from "../components/Layouts/MainLayout";
import { useContext, useEffect, useState } from "react";
import { goalService, billService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/AppSnackbar";

import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";

import CircularProgress from "@mui/material/CircularProgress";

import {
  transactions,
  expensesBreakdowns,
  balances,
  expensesStatistics,
} from "../data";

function Dashboard() {
  const { logout } = useContext(AuthContext);

  const [goals, setGoals] = useState({});
  const [bills, setBills] = useState([]);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  // ================= GOALS =================
  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data);
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Gagal mengambil data goals",
        severity: "error",
      });

      if (err.status === 401) {
        logout();
      }
    }
  };

  // ================= BILLS =================
  const fetchBills = async () => {
    try {
      const data = await billService();

      console.log("Bills:", data);

      setBills(data);
    } catch (err) {
      console.log(err);

      setSnackbar({
        open: true,
        message: "Gagal mengambil data bill",
        severity: "error",
      });

      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchGoals();
    fetchBills();
  }, []);

  return (
    <MainLayout>
      <div className="grid gap-6 sm:grid-cols-12">
        {/* Balance */}
        <div className="sm:col-span-4">
          <CardBalance data={balances} />
        </div>

        {/* Goal */}
        <div className="sm:col-span-4">
          <CardGoal data={goals} />
        </div>

        {/* Upcoming Bill */}
        <div className="sm:col-span-4">
          {bills.length === 0 ? (
            <div className="bg-white rounded-lg shadow flex justify-center items-center h-full min-h-[320px]">
              <CircularProgress color="inherit" />
            </div>
          ) : (
            <CardUpcomingBill data={bills} />
          )}
        </div>

        {/* Recent Transaction */}
        <div className="sm:col-span-4 sm:row-span-2">
          <CardRecentTransaction data={transactions} />
        </div>

        {/* Statistic */}
        <div className="sm:col-span-8">
          <CardStatistic data={expensesStatistics} />
        </div>

        {/* Expense Breakdown */}
        <div className="sm:col-span-8">
          <CardExpenseBreakdown data={expensesBreakdowns} />
        </div>
      </div>

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </MainLayout>
  );
}

export default Dashboard;