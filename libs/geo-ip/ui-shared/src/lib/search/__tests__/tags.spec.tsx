import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import Tags from '../tags';

describe('Tags', () => {
  it('should render the correct number of tags', () => {
    const mockTags = ['a', 'b', 'c'];

    render(<Tags tags={mockTags} onTermDelete={() => ''} />);

    screen.getByText('a');
    screen.getByText('b');
    screen.getByText('c');
  });

  it('should call the onTermDelete handler when clicked', () => {
    const mockTags = ['a'];
    const onTermDelete = jest.fn();

    render(<Tags tags={mockTags} onTermDelete={onTermDelete} />);

    const deleteIcon = screen.getByTestId('CancelIcon');
    user.click(deleteIcon);
    expect(onTermDelete).toHaveBeenCalled();
  });
});
