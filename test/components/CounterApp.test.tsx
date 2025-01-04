import React from 'react';
import { fireEvent, render, RenderResult, screen } from "@testing-library/react";
import {CounterApp} from "../../src/components/CounterApp";

describe(' test in <CounterApp />', () => {

  const counterValue: number =  100;


  test('should to do match with the snapshot', () => {
    const {container}: RenderResult = render(<CounterApp value={counterValue}/>);
    
    expect(container).toMatchSnapshot();
  });

  test('should display the initial counter value 100', () => {

    render(<CounterApp value={counterValue}/>);
    expect(screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(counterValue.toString());
  });

  test('should add with the button +1', () => {
    render(<CounterApp value={counterValue}/>);

    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText(counterValue + 1)).toBeTruthy();
  });

  test('should subtract with the button -1', () => {
    render(<CounterApp value={counterValue}/>);

    fireEvent.click(screen.getByText('-1'));
    // screen.debug();
    expect(screen.getByText(counterValue - 1)).toBeTruthy();
  });


  test('should reset the value with the reset button', () => {
    render(<CounterApp value={counterValue}/>);

    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText(counterValue - 1)).toBeTruthy();

    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
    

    expect(screen.getByText(counterValue)).toBeTruthy();

  });
});
