import { Controller } from "../../controller";
declare class BaseTargetController extends Controller {
    static targets: string[];
    alphaTarget: Element | null;
    alphaTargets: Element[];
    hasAlphaTarget: boolean;
}
export declare class TargetController extends BaseTargetController {
    static targets: string[];
    betaTarget: Element | null;
    betaTargets: Element[];
    hasBetaTarget: boolean;
    inputTarget: Element | null;
    inputTargets: Element[];
    hasInputTarget: boolean;
}
export {};
//# sourceMappingURL=target_controller.d.ts.map