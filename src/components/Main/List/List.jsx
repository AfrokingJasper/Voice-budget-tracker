import React, { useContext } from "react";
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

import { ExpenseTrackerContext } from "../../../context/context";

import { Delete, MoneyOff } from "@mui/icons-material";
const List = () => {
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

  console.log(deleteTransaction);

  return (
    <MUIList
      dense={false}
      className="list"
      style={{ maxHeight: "150px", overflow: "auto" }}
    >
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
                style={{
                  color: "#fff",
                  backgroundColor:
                    transaction.type === "income" ? "#4caf50" : "#f44336",
                }}
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTransaction(transaction.id)}
              >
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
