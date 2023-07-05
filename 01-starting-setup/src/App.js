import { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "CSE8A",
      amount: "Available",
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "CSE8B",
      amount: "Available",
      date: new Date(2022, 2, 17),
    },
    {
      id: "e3",
      title: "CSE11",
      amount: "Available",
      date: new Date(2023, 2, 15),
    },
  ];

  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: "#f2f2f2", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>CourseHub</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
          <button>Home</button>
          <button>Course Planner</button>
          <button>Github</button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchChange}
          style={{
            padding: "10px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            width: "300px",
          }}
        />
      </div>
      <Expenses items={filteredExpenses} />
    </div>
  );
}

export default App;
