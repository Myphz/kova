import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.kova.app",
  appName: "KOVA",
  webDir: "build",
  server: {
    androidScheme: "https",
    hostname: "kova"
  },
  plugins: {
    Keyboard: {
      resizeOnFullScreen: true
    }
  }
};

export default config;
