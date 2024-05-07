import { FieldError } from '../types';

// TODO: create min, max validators

export const required = (v: string): FieldError => {
    if (!v) {
        return {
            success: false,
            message: '필수 입력 항목입니다.',
        };
    }
    return {
        success: true,
    };
};
