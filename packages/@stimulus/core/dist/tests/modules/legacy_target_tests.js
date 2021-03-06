var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
import { ControllerTestCase } from "../cases/controller_test_case";
import { TargetController } from "../controllers/target_controller";
var LegacyTargetTests = /** @class */ (function (_super) {
    __extends(LegacyTargetTests, _super);
    function LegacyTargetTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixtureHTML = "\n    <div data-controller=\"" + _this.identifier + "\">\n      <div data-target=\"" + _this.identifier + ".alpha\" id=\"alpha1\"></div>\n      <div data-target=\"" + _this.identifier + ".alpha\" id=\"alpha2\"></div>\n      <div data-target=\"" + _this.identifier + ".beta\" data-" + _this.identifier + "-target=\"gamma\" id=\"beta1\">\n        <div data-target=\"" + _this.identifier + ".gamma\" id=\"gamma1\"></div>\n      </div>\n      <div data-controller=\"" + _this.identifier + "\" id=\"child\">\n        <div data-target=\"" + _this.identifier + ".delta\" id=\"delta1\"></div>\n      </div>\n      <textarea data-target=\"" + _this.identifier + ".input\" id=\"input1\"></textarea>\n    </div>\n  ";
        _this.warningCount = 0;
        return _this;
    }
    LegacyTargetTests.prototype.setupApplication = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.setupApplication.call(this)];
                    case 1:
                        _a.sent();
                        this.application.logger = Object.create(console, {
                            warn: {
                                value: function (message) {
                                    var args = [];
                                    for (var _i = 1; _i < arguments.length; _i++) {
                                        args[_i - 1] = arguments[_i];
                                    }
                                    return _this.warningCount++;
                                }
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LegacyTargetTests.prototype["test TargetSet#find"] = function () {
        this.assert.equal(this.controller.targets.find("alpha"), this.findElement("#alpha1"));
        this.assert.equal(this.warningCount, 1);
    };
    LegacyTargetTests.prototype["test TargetSet#find prefers scoped target attributes"] = function () {
        this.assert.equal(this.controller.targets.find("gamma"), this.findElement("#beta1"));
        this.assert.equal(this.warningCount, 0);
    };
    LegacyTargetTests.prototype["test TargetSet#findAll"] = function () {
        this.assert.deepEqual(this.controller.targets.findAll("alpha"), this.findElements("#alpha1", "#alpha2"));
        this.assert.equal(this.warningCount, 2);
    };
    LegacyTargetTests.prototype["test TargetSet#findAll prioritizes scoped target attributes"] = function () {
        this.assert.deepEqual(this.controller.targets.findAll("gamma"), this.findElements("#beta1", "#gamma1"));
        this.assert.equal(this.warningCount, 1);
    };
    LegacyTargetTests.prototype["test TargetSet#findAll with multiple arguments"] = function () {
        this.assert.deepEqual(this.controller.targets.findAll("alpha", "beta"), this.findElements("#alpha1", "#alpha2", "#beta1"));
        this.assert.equal(this.warningCount, 3);
    };
    LegacyTargetTests.prototype["test TargetSet#has"] = function () {
        this.assert.equal(this.controller.targets.has("gamma"), true);
        this.assert.equal(this.controller.targets.has("delta"), false);
        this.assert.equal(this.warningCount, 0);
    };
    LegacyTargetTests.prototype["test TargetSet#find ignores child controller targets"] = function () {
        this.assert.equal(this.controller.targets.find("delta"), null);
        this.findElement("#child").removeAttribute("data-controller");
        this.assert.equal(this.controller.targets.find("delta"), this.findElement("#delta1"));
        this.assert.equal(this.warningCount, 1);
    };
    LegacyTargetTests.prototype["test linked target properties"] = function () {
        this.assert.equal(this.controller.betaTarget, this.findElement("#beta1"));
        this.assert.deepEqual(this.controller.betaTargets, this.findElements("#beta1"));
        this.assert.equal(this.controller.hasBetaTarget, true);
        this.assert.equal(this.warningCount, 1);
    };
    LegacyTargetTests.prototype["test inherited linked target properties"] = function () {
        this.assert.equal(this.controller.alphaTarget, this.findElement("#alpha1"));
        this.assert.deepEqual(this.controller.alphaTargets, this.findElements("#alpha1", "#alpha2"));
        this.assert.equal(this.warningCount, 2);
    };
    LegacyTargetTests.prototype["test singular linked target property throws an error when no target is found"] = function () {
        var _this = this;
        this.findElement("#beta1").removeAttribute("data-target");
        this.assert.equal(this.controller.hasBetaTarget, false);
        this.assert.equal(this.controller.betaTargets.length, 0);
        this.assert.throws(function () { return _this.controller.betaTarget; });
    };
    return LegacyTargetTests;
}(ControllerTestCase(TargetController)));
export default LegacyTargetTests;
//# sourceMappingURL=legacy_target_tests.js.map