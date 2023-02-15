import bPlistParser from "bplist-parser";

export default class App<P = any> {
    constructor(private preferencesFile: string) {
    }

    getPreferences(): Promise<P> {
        return new Promise((resolve, reject) => {
            bPlistParser.parseFile<P>(this.preferencesFile, (d) => {
                if (d) {
                    reject(d);
                }
            }).then(data => resolve(data[0])).catch(e => resolve(e));
        })
    }
    getPreferencesSync() {
        return bPlistParser.parseFileSync<P>(this.preferencesFile)[0];
    }
}