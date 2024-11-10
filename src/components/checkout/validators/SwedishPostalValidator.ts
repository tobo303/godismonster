export function swedishPostalValidator(data: string) : boolean {
    if (!data) return false;
    if (data.trim().length === 0) return false;

    const postalCode = data.replace(" ", "").trim();
    if (postalCode.length !== 5) return false;
    if (!/^\d+$/.test(postalCode)) return false; // Must be all numbers.

    return true;
}