import { FieldError } from '../types';

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
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

    if (!passwordRegex.test(v)) {
        return {
            success: false,
            message: '비밀번호는 영문 숫자를 혼합한 8자리 이상이어야 합니다.',
        };
    }

    return {
        success: true,
    };
};

export const match = (password: string) => (passwordConfirm: string) => {
    if (password === passwordConfirm) {
        return {
            success: true,
        };
    } else {
        return {
            success: false,
            message: '비밀번호가 일치하지 않습니다.',
        };
    }
};
