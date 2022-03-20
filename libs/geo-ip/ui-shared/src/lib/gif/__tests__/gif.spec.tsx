import { render, screen } from '@testing-library/react';

import Gif from '../gif';

describe('Gif', () => {
  it('should render an image', () => {
    render(<Gif image="" />);

    screen.getByRole('img');
  });
});
