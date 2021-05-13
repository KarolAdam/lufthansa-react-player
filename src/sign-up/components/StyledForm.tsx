import React, { useState } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components';
import { CommonStyles } from "./CommonStyles"
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 600px;
    max-width: 90%;
    padding : 3rem;
    ${CommonStyles};
`