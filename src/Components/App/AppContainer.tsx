import React from "react";
import { Query } from "react-apollo";
import { ToastContainer, toast } from "react-toastify";
import Router from "../Router";
import GlobalStyles from "../../Styles/global-styles";
import { APP_QUERIES } from "./AppQueries.local";
import "react-toastify/dist/ReactToastify.css";

export default () => (
  <>
    <GlobalStyles />
    <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    <Query query={APP_QUERIES}>
      {({
        data: {
          auth: { isLoggedIn },
        },
      }) => <Router isLoggedIn={isLoggedIn} />}
    </Query>
  </>
);
