export default interface CandyCheckoutFormItemType {
    name: string;
    label: string;
    type: string;
    required: boolean;
    value: string;
    standalone: boolean;
    maxLength: number;
    validator?: (value: string) => boolean;
    invalidMessage: string;
}