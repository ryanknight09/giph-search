import { render } from '@testing-library/react';

import GifSearch from './gif-search';

describe('GifSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GifSearch />);
    expect(baseElement).toBeTruthy();
  });
});
