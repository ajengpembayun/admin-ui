import { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import { expenseService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import CircularProgress from "@mui/material/CircularProgress";
import CardExpense from "../components/Fragments/CardExpense";

function Expense() {
  const [expenses, setExpenses] = useState([]);
  const { logout } = useContext(AuthContext);

  const fetchExpense = async () => {
    try {
      const data = await expenseService();
      setExpenses(data);
    } catch (err) {
      console.log(err);

      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchExpense();
  }, []);

  return (
    <MainLayout>
      <div className="text-gray-03 font-medium mb-6">
        Expenses Comparison
      </div>

      {expenses.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[500px] text-primary">
          <CircularProgress
            color="inherit"
            size={50}
            enableTrackSlot
          />

          <div className="mt-3">
            Loading Data
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {expenses.map((item, index) => (
            <CardExpense
              key={index}
              data={item}
            />
          ))}
        </div>
      )}
    </MainLayout>
  );
}

export default Expense;