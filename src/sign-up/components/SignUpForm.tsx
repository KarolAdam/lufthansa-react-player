import { StyledButton } from './StyledButton'
import { StyledForm } from './StyledForm'
import { StyledFormHeader } from './StyledFormHeader'
import { StyledInput } from './StyledInput'
import { StyledLabel } from './StyledLabel'
import { StyledWrapper } from './StyledWrapper'
import React, { useState } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components';

export const SignUpForm = () => {
    return (
        <StyledWrapper>
            <StyledForm>
                <StyledFormHeader>
                    Sign-up Here!
                </StyledFormHeader>
                <StyledLabel htmlFor="name-input">Name</StyledLabel>
                <StyledInput type="text" placeholder="User name" id="name-input" />
                <StyledLabel htmlFor="password-input">Password</StyledLabel>
                <StyledInput type="password" placeholder="Password" id="password-input" />
                <StyledLabel htmlFor="repeat-password-input">Confirm Password</StyledLabel>
                <StyledInput type="password" placeholder="Confirm Password" id="repeat-password-input" />
                <StyledButton type="submit">Sign Up</StyledButton>
            </StyledForm>
        </StyledWrapper>
    )
}