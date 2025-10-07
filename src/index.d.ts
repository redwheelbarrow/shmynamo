export = dynalite;
/**
 * @param {Object} options - The shape is the same as SpecialType above
 * @param {boolean} [options.verbose=false] - Enable verbose logging
 * @param {boolean} [options.debug=false] - Enable debug logging
 * @param {boolean} [options.ssl=false] - Enable SSL for the web server
 * @param {string} [options.key] - SSL private key - if omitted and ssl enabled, self-signed cert will be used
 * @param {string} [options.cert] - SSL certificate - if omitted and ssl enabled, self-signed cert will be used
 * @param {string} [options.ca] - SSL certificate authority - if omitted and ssl enabled, self-signed cert will be used
 * @param {number} [options.createTableMs=0] - Amount of time tables stay in CREATING state
 * @param {number} [options.deleteTableMs=0] - Amount of time tables stay in DELETING state
 * @param {number} [options.updateTableMs=0] - Amount of time tables stay in UPDATING state
 * @param {number} [options.maxItemSizeKb=400] - Maximum item size
 * @param {string} [options.path] - The path to use for the LevelDB store (in-memory by default)
 *
 * @returns {http.Server | https.Server} - The Dynalite server
 */
declare function dynalite(options: {
    verbose?: boolean;
    debug?: boolean;
    ssl?: boolean;
    key?: string;
    cert?: string;
    ca?: string;
    createTableMs?: number;
    deleteTableMs?: number;
    updateTableMs?: number;
    maxItemSizeKb?: number;
    path?: string;
}): http.Server | https.Server;
declare namespace dynalite {
    export { db, httpHandler };
}
import http = require("http");
import https = require("https");
import db = require("./db");
declare function httpHandler(store: any, req: any, res: any): void;
