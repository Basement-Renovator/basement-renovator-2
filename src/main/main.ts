import * as electron from "electron";
import electronContextMenu from "electron-context-menu";
import log from "electron-log";
import initLogging from "../common/initLogging";
import * as settings from "../common/settings";
import * as onReady from "./onReady";

let window = null as null | electron.BrowserWindow;

main();

function main() {
  initLogging();
  checkSecondInstance();
  settings.initDefaults();
  initElectronHandlers();
}

function checkSecondInstance() {
  // Don't allow multiple instances of the program to run
  const hasLock = electron.app.requestSingleInstanceLock();
  if (!hasLock) {
    log.info("Second instance detected; quitting.");
    electron.app.quit();
  }
}

function initElectronHandlers() {
  // This method will be called when Electron has finished initialization and is ready to create
  // browser windows
  electron.app.on("ready", () => {
    window = onReady.createWindow();
    onReady.autoUpdate(window);
  });

  electron.app.on("second-instance", () => {
    // The end-user launched a second instance of the application
    // They probably forgot that it was already open, so focus the window
    if (window !== null) {
      if (window.isMinimized()) {
        window.restore();
      }

      window.focus();
    }
  });

  // By default, Electron does not come with a right-click context menu
  // This library provides some sensible defaults
  electronContextMenu();
}
