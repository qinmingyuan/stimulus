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
    default_1.prototype.next = function () {
        if (this.indexValue < this.lastIndex) {
            this.indexValue++;
        }
    };
    default_1.prototype.previous = function () {
        if (this.indexValue > 0) {
            this.indexValue--;
        }
    };
    default_1.prototype.indexValueChanged = function () {
        this.render();
    };
    default_1.prototype.render = function () {
        var _this = this;
        this.slideTargets.forEach(function (element, index) {
            element.classList.toggle(_this.currentSlideClass, index == _this.indexValue);
        });
    };
    Object.defineProperty(default_1.prototype, "lastIndex", {
        get: function () {
            return this.slideTargets.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    default_1.targets = ["slide"];
    default_1.classes = ["currentSlide"];
    default_1.values = { index: Number };
    return default_1;
}(Controller));
export default default_1;
