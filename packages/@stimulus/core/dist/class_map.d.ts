import { Scope } from "./scope";
export declare class ClassMap {
    readonly scope: Scope;
    constructor(scope: Scope);
    has(name: string): boolean;
    get(name: string): string | null;
    getAttributeName(name: string): string;
    getDataKey(name: string): string;
    readonly data: import("./data_map").DataMap;
}
//# sourceMappingURL=class_map.d.ts.map