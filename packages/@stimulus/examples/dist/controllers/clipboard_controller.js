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
import { Controller } from "stimulus";
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.initialize = function () {
        if (document.queryCommandSupported("copy")) {
            this.element.classList.add(this.supportedClass);
        }
    };
    default_1.prototype.copy = function () {
        this.sourceTarget.select();
        document.execCommand("copy");
    };
    default_1.targets = ["source"];
    default_1.classes = ["supported"];
    return default_1;
}(Controller));
export default default_1;
