import { render } from '@testing-library/react';

import Search from './search';

describe('GifSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Search onInputChange={() => ''} />);
    expect(baseElement).toBeTruthy();
  });
});
