import React from 'react';
import { Story, Meta } from '@storybook/react';
import { NavBar } from './NavBar'
import { MyInput } from './MyInput';
import { MemoryRouter, Link, NavLink } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: {
      color: string;
      background: string;
    };
  }
}

const theme: DefaultTheme = {
  primary: {
    color: '#b1abab',
    background: '#1d1d1d',
  }
}

export default {
  title: 'Core/MyInput',
  component: MyInput,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => {
      return <MemoryRouter> {/* <Story /> */}
        {Story()}
      </MemoryRouter>
    },
    (Story) => {
      return <ThemeProvider theme={theme}>
        {Story()}
      </ThemeProvider>
    }
  ]
} as Meta;

const Template: Story<Parameters<typeof MyInput>[0]> = (args) => <MyInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  type: "password",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "text",
};


