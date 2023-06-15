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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors = require('cors');
var axios_1 = __importDefault(require("axios"));
var app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.get('/', function (req, res) {
    return res.send('this is the respone from Node Backend');
});
app.get('/about', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, res.send('This is the reponse from Node js').status(200)];
    });
}); });
app.post('/data', function (req, res) {
    var input = req.body.input;
    var fetchData = function () {
        return axios_1.default.get('https://serpapi.com/search?engine=google_maps', {
            params: {
                api_key: "4f2744c99de17c74dc12a51a07b99502af791c3bbc47096580ead6cd70397424",
                engine: 'google',
                q: "coffee"
            }
        })
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    var addData = function (targetValue) { return __awaiter(void 0, void 0, void 0, function () {
        var result, value, newValue, _i, newValue_1, obj, key, _a, _b, value_1, value_2, key, _c, _d, value_3, data, _e, _f, data, value_4, value_5;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, fetchData()];
                case 1:
                    result = _g.sent();
                    for (value in result) {
                        newValue = result[value];
                        if (Array.isArray(newValue)) {
                            for (_i = 0, newValue_1 = newValue; _i < newValue_1.length; _i++) {
                                obj = newValue_1[_i];
                                if (typeof (obj) === 'object') {
                                    for (key in obj) {
                                        if (obj[key] === targetValue) {
                                            return [2 /*return*/, obj];
                                        }
                                        else if (Array.isArray(obj[key])) {
                                            for (_a = 0, _b = obj[key]; _a < _b.length; _a++) {
                                                value_1 = _b[_a];
                                                if (value_1 === targetValue) {
                                                    return [2 /*return*/, (obj[key])];
                                                    return [2 /*return*/, ("Title: ".concat(obj.title, ", Position: ").concat(obj.position, " ").concat(JSON.stringify(obj[key])))];
                                                }
                                            }
                                        }
                                        else if (typeof (obj[key] == 'object')) {
                                            for (value_2 in obj[key]) {
                                                if (obj[key][value_2] === targetValue) {
                                                    return [2 /*return*/, obj[key]];
                                                    return [2 /*return*/, ("Title: ".concat(obj.title, ", Position: ").concat(obj.position, " ").concat(JSON.stringify(obj[key])))];
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else if (typeof (newValue) == 'object') {
                            for (key in newValue) {
                                if (newValue[key] === targetValue) {
                                    return [2 /*return*/, newValue];
                                }
                                else if (Array.isArray(newValue[key])) {
                                    for (_c = 0, _d = newValue[key]; _c < _d.length; _c++) {
                                        value_3 = _d[_c];
                                        if (newValue[key][value_3] === targetValue) {
                                            return [2 /*return*/, newValue[key]];
                                        }
                                        else if (typeof (newValue[key][value_3]) == 'object') {
                                            for (data in newValue[key][value_3]) {
                                                return [2 /*return*/, newValue[key][value_3]];
                                                return [2 /*return*/, ("Title: ".concat(newValue[key][value_3].title, ", Position: ").concat(newValue[key][value_3].position, " ").concat(data, ": ").concat(newValue[key][value_3]))];
                                            }
                                        }
                                        else if (Array.isArray(newValue[key][value_3])) {
                                            for (_e = 0, _f = newValue[key][value_3]; _e < _f.length; _e++) {
                                                data = _f[_e];
                                                if (data === targetValue) {
                                                    return [2 /*return*/, newValue[key][value_3]];
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (typeof (newValue[key]) == 'object') {
                                    for (value_4 in newValue[key]) {
                                        if (targetValue === value_4) {
                                            return [2 /*return*/, newValue[key]];
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            value_5 = 'Value not found';
                            return [2 /*return*/, value_5];
                        }
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    addData(input)
        .then(function (response) {
        return res.status(200).json({
            data: response
        });
    })
        .catch(function (errr) {
        return res.status(404).json({
            message: "data not found",
            data: errr.message
        });
    });
});
app.listen(3200, function () {
    console.log('Server is running on port 3200');
});
