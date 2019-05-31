import * as validators from '../src/validators';

describe('Validators Test file', () => {
    describe('isNil', () => {
        it('isNil(undefined) => true', () => {
            expect(validators.isNil()).toBe(true)
        });
        it('isNil(null) => true', () => {
            expect(validators.isNil(null)).toBe(true)
        });
        it('isNil(0) => false', () => {
            expect(validators.isNil(0)).toBe(false)
        });
        it('isNil("") => false', () => {
            expect(validators.isNil('')).toBe(false)
        });
        it('isNil({}) => false', () => {
            expect(validators.isNil({})).toBe(false)
        });
        it('isNil(\'test\') => false', () => {
            expect(validators.isNil('test')).toBe(false)
        });
    });
});