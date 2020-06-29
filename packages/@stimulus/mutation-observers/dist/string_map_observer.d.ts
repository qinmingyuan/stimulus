export interface StringMapObserverDelegate {
    getStringMapKeyForAttribute(attributeName: string): string | undefined;
    stringMapKeyAdded?(key: string, attributeName: string): void;
    stringMapValueChanged?(value: string | null, key: string): void;
    stringMapKeyRemoved?(key: string, attributeName: string): void;
}
export declare class StringMapObserver {
    readonly element: Element;
    readonly delegate: StringMapObserverDelegate;
    private started;
    private stringMap;
    private mutationObserver;
    constructor(element: Element, delegate: StringMapObserverDelegate);
    start(): void;
    stop(): void;
    refresh(): void;
    private processMutations;
    private processMutation;
    private refreshAttribute;
    private stringMapKeyAdded;
    private stringMapValueChanged;
    private stringMapKeyRemoved;
    private readonly knownAttributeNames;
    private readonly currentAttributeNames;
    private readonly recordedAttributeNames;
}
//# sourceMappingURL=string_map_observer.d.ts.map