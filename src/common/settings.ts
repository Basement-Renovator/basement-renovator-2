// Settings related to the program are stored in the following file:
// C:\Users\[Username]\AppData\Roaming\Racing+\config.json

// For the "Settings" part of the UI, see the "ui/settings-tooltip.ts" file
// We use the "electron-store" library instead of using localstorage (cookies) because the main
// Electron process is not able to natively access cookies

import Store from "electron-store";

const settings = new Store();
export default settings;

export function initDefaults(): void {
  if (settings.get("window") === undefined) {
    settings.set("window", {});
  }
}
