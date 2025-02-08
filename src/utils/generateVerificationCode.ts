export const generateVerificationCode = (length = 6): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let verificationCode = ''; // 6-Digit Token Verification
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        verificationCode += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return verificationCode;
}; 