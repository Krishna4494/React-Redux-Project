import styled from "styled-components";

export const Card = styled.div`
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
    margin: 20px auto;
    transition : box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background: white;
    padding: 10px;
    overflow: hidden;
    border-radius: 5px;
    width: 40%;
`;

export const ActionButton = styled.button`
    border: none;
    color: white;
    background: blue;
    border-radius: 5px;
    height: 35px;
    width: 100px;
    margin-bottom: 20px;
    cursor:pointer
`;

export const Para = styled.p`
    margin: 0px 0px 0px 9%;
`;

export const LabelTitle = styled.h1`
    text-align: center;
`;

export const Label = styled.label`
    text-decoration-line: underline;
    text-decoration-style: dotted;
    text-style: italic;
    font-size: 20px;
`;
