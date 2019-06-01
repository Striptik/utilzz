export const isNil = (variable?: any): boolean =>
    typeof variable === 'undefined'
    || variable === null;

export const isNilStr = (variable?: any): boolean =>
    isNil(variable) || variable.length === 0;

export const isOneNil = (...params: any): boolean =>
    params.some(isNil);
