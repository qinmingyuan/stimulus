import { ClassPropertiesBlessing } from "./class_properties";
import { Constructor } from "./constructor";
import { Context } from "./context";
import { ValueDefinitionMap } from "./value_properties";
export declare type ControllerConstructor = Constructor<Controller>;
export declare class Controller {
    static blessings: (typeof ClassPropertiesBlessing)[];
    static targets: string[];
    static values: ValueDefinitionMap;
    readonly context: Context;
    constructor(context: Context);
    readonly application: import("./application").Application;
    readonly scope: import("./scope").Scope;
    readonly element: Element;
    readonly identifier: string;
    readonly targets: import("./target_set").TargetSet;
    readonly classes: import("./class_map").ClassMap;
    readonly data: import("./data_map").DataMap;
    initialize(): void;
    connect(): void;
    disconnect(): void;
}
//# sourceMappingURL=controller.d.ts.map