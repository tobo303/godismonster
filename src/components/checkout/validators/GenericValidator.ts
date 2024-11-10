export function genericValidator(data: string) : boolean {
    if (!data) return false;
    if (data.trim().length === 0) return false;

    return true;
}