import { render } from '@testing-library/react';

import Gif from './gif';

describe('Gif', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Gif />);
    expect(baseElement).toBeTruthy();
  });
});
