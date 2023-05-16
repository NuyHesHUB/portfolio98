import React from 'react';
import styled from 'styled-components';

const BiosInfoEntryStyled = styled.tr`
    > td{
        vertical-align: top;
    }
`
export const BiosInfoEntry = ({label, value}) => {
    return (
        <BiosInfoEntryStyled>
            <td >{label}</td>
            <td>:</td>
            <td>{value}</td>
        </BiosInfoEntryStyled>
    );
};

export default BiosInfoEntry;