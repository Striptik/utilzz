export const isNil = (variable?: any): boolean =>
    typeof variable === 'undefined'
    || variable === null;
