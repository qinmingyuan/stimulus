import { Token, TokenListObserver, TokenListObserverDelegate } from "../../token_list_observer";
import { ObserverTestCase } from "../observer_test_case";
export default class TokenListObserverTests extends ObserverTestCase implements TokenListObserverDelegate {
    attributeName: string;
    fixtureHTML: string;
    observer: TokenListObserver;
    "test tokenMatched"(): Promise<void>;
    "test adding a token to the right"(): Promise<void>;
    "test inserting a token in the middle"(): Promise<void>;
    "test removing the leftmost token"(): Promise<void>;
    "test removing the rightmost token"(): Promise<void>;
    "test removing the only token"(): Promise<void>;
    readonly element: Element;
    tokenString: string;
    tokenMatched(token: Token): void;
    tokenUnmatched(token: Token): void;
}
//# sourceMappingURL=token_list_observer_tests.d.ts.map