import { expect } from "@playwright/test";

export default class AssertUtil {

    static async assertEquals(actual: string, expected: string): Promise<void> {
       
        expect(actual.trim().replace(/\s+/g, " "))
            .toBe(expected.trim().replace(/\s+/g, " "));
    }

    static async assertTrue(actual: boolean): Promise<void> {
        expect(actual).toBeTruthy();
    }

    static async assertFalse(actual: boolean): Promise<void> {
        expect(actual).toBeFalsy();
    }
}