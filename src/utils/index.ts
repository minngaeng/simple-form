import { FieldError } from '../types';

// TODO: create min, max validators

export const required = (v: string): FieldError => {
    if (!v) {
        return {
            success: false,
            message:
                // '필수 입력 항목입니다.',
                '값을 입력해주세요.',
        };
    }
    return {
        success: true,
    };
};

export const min = (minLength: number) => {
    return (value: string) => {
        if (value.length >= minLength) {
            return {
                success: true,
            };
        } else {
            return {
                success: false,
                message: `최소 ${minLength}자 이상 입력해주세요.`,
            };
        }
    };
};

export const max = (maxLength: number) => {
    return (value: string) => {
        if (value.length <= maxLength) {
            return {
                success: true,
            };
        } else {
            return {
                success: false,
                message: `최대 ${maxLength}자 이하로 입력해주세요.`,
            };
        }
    };
};

/**
 * 고차함수 숙지 후 추후 삭제 예정
 * */
/*const checkMin = (value: string) => {
    if (value.length > 5) {
        return {
            success: true,
        };
    } else {
        return {
            success: false,
            message: '최소 5자 이상 입력해주세요.',
        };
    }
};
*/
