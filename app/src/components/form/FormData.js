import { Field } from "react-final-form";
import styled from "styled-components";

const FormData = styled(Field)`
    border: 1px solid #DCDCDC;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    box-sizing: border-box;
    color: #595959;
    font-weight: 100;
    padding: 1rem;
    text-align: ${props => props.align ? props.align: null};
    width: 100%;
    &:focus {
        box-shadow: 0 0 3px rgba(51, 204, 255, 2);
        border: 1px solid #0099FF;
        outline: none;
    }
`;

export default FormData;