import { App } from "@capacitor/app";

export const appConfig = () => {
  App.addListener("backButton", () => window.history.back());
};
