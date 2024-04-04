import { FieldError } from '../types';

export const min =
    (minLength: number) =>
    (v: string): FieldError => {
        if (v.length < minLength) {
            return {
                success: false,
                message: `최소 ${minLength}자 이상 입력해주세요.`,
            };
        }
        return {
            success: true,
        };
    };

export const max =
    (maxLength: number) =>
    (v: string): FieldError => {
        if (v.length > maxLength) {
            return {
                success: false,
                message: `최대 ${maxLength}자 이하로 입력해주세요.`,
            };
        }
        return {
            success: true,
        };
    };
