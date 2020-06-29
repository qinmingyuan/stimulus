import { Application } from "./application";
import { Context } from "./context";
import { Definition } from "./definition";
import { Module } from "./module";
import { Scope } from "./scope";
import { ScopeObserverDelegate } from "./scope_observer";
export declare class Router implements ScopeObserverDelegate {
    readonly application: Application;
    private scopeObserver;
    private scopesByIdentifier;
    private modulesByIdentifier;
    constructor(application: Application);
    readonly element: Element;
    readonly schema: import("./schema").Schema;
    readonly logger: import("./logger").Logger;
    readonly controllerAttribute: string;
    readonly modules: Module[];
    readonly contexts: Context[];
    start(): void;
    stop(): void;
    loadDefinition(definition: Definition): void;
    unloadIdentifier(identifier: string): void;
    getContextForElementAndIdentifier(element: Element, identifier: string): Context | undefined;
    /** @hidden */
    handleError(error: Error, message: string, detail: any): void;
    /** @hidden */
    createScopeForElementAndIdentifier(element: Element, identifier: string): Scope;
    /** @hidden */
    scopeConnected(scope: Scope): void;
    /** @hidden */
    scopeDisconnected(scope: Scope): void;
    private connectModule;
    private disconnectModule;
}
//# sourceMappingURL=router.d.ts.map