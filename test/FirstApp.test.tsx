import React from 'react';
import { render, RenderResult, screen } from "@testing-library/react";
import {FirstApp} from "../src/FirstApp";

describe(' test in <FirstApp />', () => {

  const name: string =  'Daniel';

  test('should to do match with the snapshot', () => {
    const {container}: RenderResult = render(<FirstApp name={name} subTitle="subtitle"/>);
    
    expect(container).toMatchSnapshot();
  });

  test('should display the name into h1 tag', () => {

    const name: string =  'Daniel';
    const {container, getByText, getByTestId}: RenderResult = render(<FirstApp name={name} subTitle="subtitle"/>);

    
    expect(container).toMatchSnapshot();
    expect(getByText(name)).toBeTruthy();
    expect(getByTestId('test-name').innerHTML).toBe(name);
  });

  test('should display the subtitle into p tag sent by props', () => {

    const name: string =  'Daniel';
    const subtitle: string =  'I am a subtitle';
    const {getByText}: RenderResult = render(<FirstApp name={name} subTitle={subtitle} />);

    
    expect(getByText(subtitle)).toBeTruthy();
  });
});