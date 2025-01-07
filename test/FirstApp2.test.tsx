import React from 'react';
import { render, RenderResult, screen } from "@testing-library/react";
import {FirstApp} from "../src/FirstApp";

describe(' test in <FirstApp />', () => {

  const name: string =  'Daniel';
  const subtitle: string =  'I am a subtitle';


  test('should to do match with the snapshot', () => {
    const {container}: RenderResult = render(<FirstApp name={name} subTitle="subtitle"/>);
    
    expect(container).toMatchSnapshot();
  });

  test('should display the name Daniel', () => {

    render(<FirstApp name={name} subTitle="subtitle"/>);
    expect(screen.getByText(name)).toMatchSnapshot();
  });

  test('should display the subtitle into p tag ', () => {

    render(<FirstApp name={name} subTitle={subtitle} />);

    
    expect(screen.getByRole('paragraph').innerHTML).toContain(subtitle);
  });
});