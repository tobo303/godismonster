import { genericValidator } from "../validators/GenericValidator";
import { phoneNumberValidator } from "../validators/PhoneNumberValidator";
import { swedishPostalValidator } from "../validators/SwedishPostalValidator";

    //#region populate array
    export const formFieldData = [
        {
            name: 'customer_first_name',
            label: 'Förnamn',
            type: 'text',
            required: true,
            standalone: false,
            maxLength: 255,
            value: "",
            validator: genericValidator,
            invalidMessage: "Ange ett förnamn."
        },
        {
            name: 'customer_last_name',
            label: 'Efternamn',
            type: 'text',
            required: true,
            standalone: false,
            maxLength: 255,
            value: "",
            validator: genericValidator,
            invalidMessage: "Ange ett efternamn."
        },
        {
            name: 'customer_email',
            label: 'Email',
            type: 'email',
            required: true,
            standalone: false,
            maxLength: 255,
            value: "",
            validator: genericValidator,
            invalidMessage: "Ange en giltigt e-post adress."
        },
        {
            name: 'customer_phone',
            label: 'Telefon',
            type: 'phone',
            required: false,
            standalone: false,
            maxLength: 16,
            value: "",
            validator: phoneNumberValidator,
            invalidMessage: "Ange ett giltigt telefonnummer"
        },
        {
            name: 'customer_address',
            label: 'Adress',
            type: 'text',
            required: true,
            standalone: false,
            maxLength: 255,
            value: "",
            invalidMessage: "Ange en giltig gatuadress."
        },
        {
            name: 'customer_postcode',
            label: 'Postnummer',
            type: 'text',
            required: true,
            standalone: false,
            maxLength: 6,
            value: "",
            validator: swedishPostalValidator,
            invalidMessage: "Ange ett giltigt postnummer."
        },
        {
            name: 'customer_city',
            label: 'Stad',
            type: 'text',
            required: true,
            standalone: false,
            maxLength: 255,
            value: "",
            validator: genericValidator,
            invalidMessage: "Ange en giltig stad"
        },
    ];
    //#endregion
