import * as validators from '../src/validators';

describe('Validators Test file', () => {
  describe('isNil', () => {
    const { isNil } = validators;
    it('isNil(undefined) => true', () => {
      expect(isNil()).toBe(true);
    });
    it('isNil(null) => true', () => {
      expect(isNil(null)).toBe(true);
    });
    it('isNil(0) => false', () => {
      expect(isNil(0)).toBe(false);
    });
    it('isNil("") => false', () => {
      expect(isNil('')).toBe(false);
    });
    it('isNil({}) => false', () => {
      expect(isNil({})).toBe(false);
    });
    it('isNil(\'test\') => false', () => {
      expect(isNil('test')).toBe(false);
    });
  });
  describe('isNilStr', () => {
    const { isNilStr } = validators;
    it('isNilStr(undefined) => true', () => {
      expect(isNilStr()).toBe(true);
    });
    it('isNilStr(null) => true', () => {
      expect(isNilStr(null)).toBe(true);
    });
    it('isNilStr(0) => false', () => {
      expect(isNilStr(0)).toBe(false);
    });
    it('isNilStr("") => false', () => {
      expect(isNilStr('')).toBe(true);
    });
    it('isNilStr({}) => false', () => {
      expect(isNilStr({})).toBe(false);
    });
    it('isNilStr(\'test\') => false', () => {
      expect(isNilStr('test')).toBe(false);
    });
  });
  describe('isOneNil', () => {
    const { isOneNil } = validators;
    it('isOneNil(\'notNull\', null) => true', () => {
      expect(isOneNil('notNull', null)).toBe(true);
    });
    it('isOneNil(1, undefined) => true', () => {
      expect(isOneNil(1, undefined)).toBe(true);
    });
    it('isOneNil(0, 1) => false', () => {
      expect(isOneNil(0, 1)).toBe(false);
    });
    it('isOneNil(\'\', 0) => false', () => {
      expect(isOneNil('', 0)).toBe(false);
    });
    it('isOneNil(\'a\', 1, undefined)) => true', () => {
      expect(isOneNil('a', 1, undefined)).toBe(true);
    });
    it('isOneNil(\'\', false, 0) => false', () => {
      expect(isOneNil('', false, 0)).toBe(false);
    });
  });
});
