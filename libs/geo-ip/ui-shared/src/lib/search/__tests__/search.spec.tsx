import { render, screen, fireEvent } from '@testing-library/react';
import user from '@testing-library/user-event';

import Search from '../search';

describe('Search', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Search onInputChange={() => ''} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render text input', () => {
    render(<Search onInputChange={() => ''} />);

    screen.getByRole('textbox');
  });

  it('should call onInputChange when text is entered', () => {
    const onInputChange = jest.fn();
    const inputText = 'pizza';

    render(<Search onInputChange={onInputChange} />);

    const input = screen.getByRole('textbox');
    user.type(input, inputText);

    expect(onInputChange).toHaveBeenCalledWith(inputText);
  });

  it('should not render the error state when value text is passed', () => {
    const onInputChange = jest.fn();
    const inputText = 'pizza';

    render(<Search onInputChange={onInputChange} />);

    const input = screen.getByRole('textbox');
    user.type(input, inputText);

    screen.getByText('Hint: hit enter to add up to 2 adjacent terms');
  });

  it('should render error state when more than a lenfth of 50 for the input value', () => {
    const onInputChange = jest.fn();
    const inputTextOver50 =
      'pizzapizzapizzapizzapizzapizzapizzapizzapizzapizzaNOWOVER50';

    render(<Search onInputChange={onInputChange} />);

    const input = screen.getByRole('textbox');
    user.type(input, inputTextOver50);

    screen.getByText('must be 50 or less characters');
  });

  it('should render max of two tags on enter event', () => {
    const onInputChange = jest.fn();

    render(<Search onInputChange={onInputChange} />);

    const input = screen.getByRole('textbox');

    user.type(input, 'one');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    user.type(input, 'two');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    user.type(input, 'three');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    const tags = screen.getAllByTestId('CancelIcon');
    expect(tags).toHaveLength(2);
  });

  it('should should not render duplicate tags labels', () => {
    const onInputChange = jest.fn();
    const duplicateInput = 'duplicate';

    render(<Search onInputChange={onInputChange} />);

    const input = screen.getByRole('textbox');

    user.type(input, duplicateInput);
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    user.type(input, duplicateInput);
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    const tags = screen.getAllByTestId('CancelIcon');
    expect(tags).toHaveLength(1);
  });

  // it('should have the correct number of tags when user clicks delete icon', () => {
  //   const onInputChange = jest.fn();

  //   render(<Search onInputChange={onInputChange} />);

  //   const input = screen.getByRole('textbox');

  //   user.type(input, 'one');
  //   fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

  //   user.type(input, 'two');
  //   fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

  //   const tags = screen.getAllByTestId('CancelIcon');

  //   expect(tags).toHaveLength(2);

  //   const tag2 = screen.getByRole('button', { name: 'two' });

  //   fireEvent.click(tag2);

  //   expect(tags).toHaveLength(1);
  // });
});
