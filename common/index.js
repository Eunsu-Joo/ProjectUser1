import Router from "next/router";
export const routeToHome = () => {
  if (Router.pathname === "/") {
    Router.reload(window.location.pathname);
  } else {
    Router.replace("/");
  }
};
