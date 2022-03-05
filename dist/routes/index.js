"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const geonames_routes_1 = require("./geonames.routes");
const router = (0, express_1.Router)();
exports.router = router;
router.use('/api/v1/geonames', new geonames_routes_1.GeoNamesRouter().routes());
