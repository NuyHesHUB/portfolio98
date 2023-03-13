import React from 'react';
import styled from 'styled-components';

export const BiosInfoSectionStyled = styled.table``

export const BiosInfoSection = ({children}) => {
    return (
        <BiosInfoSectionStyled>
            <tbody>{children}</tbody>
        </BiosInfoSectionStyled>
    );
};

export default BiosInfoSection;
