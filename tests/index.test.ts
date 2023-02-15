import App from "../src/index";
import {ItermPreferences} from "./iterm-preferences";


describe("Test The Method Of App", () => {
    const file = `${__dirname}/com.googlecode.iterm2.plist`
    test("getPreferences", async () => {
        const iterm = new App<ItermPreferences>(file);
        const preferences = await iterm.getPreferences();
        expect(preferences.NSNavLastRootDirectory).toBe("~/svn/Platform/webui/@longtu/platform/trunk/src/assets");
    });
    test("getPreferencesSync", () => {
        const iterm = new App<ItermPreferences>(file);
        const preferences = iterm.getPreferencesSync();
        expect(preferences.NSNavLastRootDirectory).toBe("~/svn/Platform/webui/@longtu/platform/trunk/src/assets");
    });
});