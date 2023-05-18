import React, { useRef, useEffect } from "react";
import { Grid } from "@mui/material";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
// import { SpeechState, useSpeechContext } from "@speechly/react-client";
// import ErrorPanel from "@speechly/react-ui";

import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import "./app.css";

const App = () => {
  // const main = useRef(null);
  // const { speechState } = useSpeechContext();

  // const executeScroll = () => {
  //   main.current.scrollIntoView();
  // };
  // useEffect(() => {
  //   if (speechState === SpeechState.Recording) {
  //     executeScroll();
  //   }
  // }, [SpeechState]);

  return (
    <div>
      <Grid
        className="grid"
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{
          height: "100vh",
          gap: "16px",
        }}
      >
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          {/* ref={main} */}
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      {/* <button></button> */}
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        {/* <ErrorPanel /> */}
      </PushToTalkButtonContainer>
    </div>
  );
};

export default App;
