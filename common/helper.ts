import { Page } from "@playwright/test";

export class helper {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

}
export interface Dictionary<T> {
    [key: string]: T;
}
