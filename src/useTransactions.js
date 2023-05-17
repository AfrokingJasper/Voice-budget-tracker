import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionPerType = transactions.filter((t) => t.type === title);
  const total = transactionPerType.reduce((acc, cur) => (acc += cur.amount));
  const categories = title === "income" ? incomeCategories : expenseCategories;

  console.log(transactionPerType, total, categories);

  transactionPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
  });
};
