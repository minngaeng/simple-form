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

export const emailValidation = (v: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(v)) {
        return {
            success: false,
            message: '이메일 형식에 맞게 입력해주세요.',
        };
    }

    return {
        success: true,
    };
};

export const passwordValidation = (v: string) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

    if (!passwordRegex.test(v)) {
        return {
            success: false,
            message: '영문, 숫자를 포함하여 8자 이상 입력해주세요.',
        };
    }

    return {
        success: true,
    };
};
