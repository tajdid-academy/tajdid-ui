type PasswordState = {
    [key: string]: {
        isValid: boolean;
        message: string;
    };
};
export default function usePasswordSchema(): {
    handlePasswordValidation: (value: string) => void;
    passwordState: PasswordState;
};
export {};
