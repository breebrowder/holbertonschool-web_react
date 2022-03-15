import { getFullYear, getFooterCopy, getLatestNotification } from "./utils"
describe("getFullYear", () => {
    it("Check that correct year is returned", () => {
        expect(getFullYear()).toEqual(new Date().getFullYear());
    });
});

describe("getFooterCopy", () => {
    it("Returns correct string when arg is true or false", () => {
        expect(getFooterCopy(true)).toEqual("Holberton School");
    });

    it("When passed false", () => {
        expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
    });
});

describe("getLatestNotification", () => {
    it("getting string back", () => {
        expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
    });
});