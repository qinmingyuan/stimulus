import { ApplicationTestCase } from "./application_test_case";
import { Constructor } from "../../constructor";
import { Controller, ControllerConstructor } from "../../controller";
export declare class ControllerTests<T extends Controller> extends ApplicationTestCase {
    identifier: string | string[];
    controllerConstructor: ControllerConstructor;
    fixtureHTML: string;
    setupApplication(): void;
    readonly controller: T;
    readonly identifiers: string[];
    readonly controllers: T[];
}
export declare function ControllerTestCase(): Constructor<ControllerTests<Controller>>;
export declare function ControllerTestCase<T extends Controller>(constructor: Constructor<T>): Constructor<ControllerTests<T>>;
//# sourceMappingURL=controller_test_case.d.ts.map