// Injecting dependencies
import "@testing-library/jest-dom/vitest";

// Can also be used for using global variables, e.g.

/* 
    Source: https://vitest.dev/config/

    
    import { config } from '@some-testing-lib'

    if (!globalThis.defined) {
    config.plugins = [myCoolPlugin]
    computeHeavyThing()
    globalThis.defined = true
    }

    // hooks are reset before each suite
    afterEach(() => {
    cleanup()
    })

    globalThis.resetBeforeEachTest = true
*/
