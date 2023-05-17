import React from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
  Button,
} from "@mui/material";

import { Delete, MoneyOff } from "@mui/icons-material";
import "./list.css";

const List = () => {
  const transactions = [
    { id: 1, type: "income", category: "Salary", amount: 50, date: new Date() },
    { id: 2, type: "income", category: "Salary", amount: 50, date: new Date() },
    { id: 3, type: "income", category: "Salary", amount: 50, date: new Date() },
    { id: 4, type: "income", category: "Salary", amount: 50, date: new Date() },
  ];

  return (
    <MUIList dense={false} className="list">
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "income"
                    ? "avatarIncome"
                    : "avatarExpense"
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
