import { TestCase } from "./test_case";
interface TriggerEventOptions {
    bubbles?: boolean;
    setDefaultPrevented?: boolean;
}
export declare class DOMTestCase extends TestCase {
    fixtureSelector: string;
    fixtureHTML: string;
    runTest(testName: string): Promise<void>;
    renderFixture(fixtureHTML?: string): Promise<any>;
    readonly fixtureElement: Element;
    triggerEvent(selectorOrTarget: string | EventTarget, type: string, options?: TriggerEventOptions): Promise<Event>;
    findElement(selector: string): Element;
    findElements(...selectors: string[]): Element[];
    readonly nextFrame: Promise<any>;
}
export {};
//# sourceMappingURL=dom_test_case.d.ts.map