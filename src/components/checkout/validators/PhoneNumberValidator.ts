export function phoneNumberValidator(data: string) : boolean {
    
    if (!data) return false;
    if (data.trim().length === 0) return false;

    const phoneNumber = data.replace(" ", "");
    if (phoneNumber.startsWith("+") && phoneNumber.length < 12) return false;
    if (phoneNumber.length < 10) return false;

    return true;
}