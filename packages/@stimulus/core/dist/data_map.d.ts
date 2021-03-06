import { Scope } from "./scope";
export declare class DataMap {
    readonly scope: Scope;
    constructor(scope: Scope);
    readonly element: Element;
    readonly identifier: string;
    get(key: string): string | null;
    set(key: string, value: string): string | null;
    has(key: string): boolean;
    delete(key: string): boolean;
    getAttributeNameForKey(key: string): string;
}
//# sourceMappingURL=data_map.d.ts.map