//#region react dependencies
import React, { useState } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
//#endregion react dependencies

//#region checkout form dependencies
import CandyCheckoutFormItemType from './CandyCheckoutFormItemType';
//#endregion

interface CandyCheckoutFormGroupProps {
    formGrp: CandyCheckoutFormItemType;
}

const CandyCheckoutFormGroup: React.FC<CandyCheckoutFormGroupProps> = ({ formGrp }) => {
    const [isValid, setIsValid] = useState(!formGrp.required);
    
    return (
        <FormGroup controlId="validationCustom05">
            <Form.Label>{formGrp.label}</Form.Label>
            <Form.Control
                required={formGrp.required}
                type={formGrp.type}
                placeholder={formGrp.label}
                maxLength={formGrp.maxLength}   
                //ref={formGrp.value}
                isInvalid={!isValid}
                isValid={isValid}
                onChange={(e) => { 
                    formGrp.value = e.target.value;
                    if (formGrp.validator)
                        setIsValid(formGrp.validator(formGrp.value));
                    else
                        setIsValid(true); // No validation required.

            }}
            />
            <Form.Control.Feedback type="invalid">
                {formGrp.invalidMessage}
            </Form.Control.Feedback>
        </FormGroup>
    );
};
 

export default CandyCheckoutFormGroup;