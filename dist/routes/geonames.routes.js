"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoNamesRouter = void 0;
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
class GeoNamesRouter {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    routes() {
        this.router.get('/search-city/:searchCity', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let searchText = req.params.searchCity;
                let maxResult = req.query.maxResult || 5;
                let userName = process.env.GEONAME_USER;
                let url = `http://api.geonames.org/searchJSON?name_startsWith=${searchText}&maxRows=${maxResult}&username=${userName}`;
                const result = yield axios_1.default.get(url);
                // console.log(result)
                res.status(200).json(result.data);
            }
            catch (error) {
                res.status(500).json({ err: error.message });
            }
        }));
        this.router.get('/reversed', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let lat = req.query.lat || 0;
                let lng = req.query.lng || 0;
                let userName = process.env.GEONAME_USER;
                const url = `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${lat}&lng=${lng}&cities=cities1000&username=${userName}`;
                const result = yield axios_1.default.get(url);
                // console.log(result)
                res.status(200).json(result.data);
            }
            catch (error) {
                res.status(500).json({ err: error.message });
            }
        }));
        return this.router;
    }
}
exports.GeoNamesRouter = GeoNamesRouter;
