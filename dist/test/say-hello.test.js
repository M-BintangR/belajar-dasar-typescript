import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should return hello bintang', function () {
        expect(sayHello("Bintang")).toBe("Hello Bintang");
    });
});
