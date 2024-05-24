import { Text } from ".";
import { customRender } from '@architecture/test-commons/react-testing-library';

const render = customRender();

describe('<Text />', () => {
  it('renders h1 tag', () => {
    const { 
      container 
    } = render(<Text tag="h1">Sample text</Text>);
    
    expect(container).toMatchSnapshot();
  })
})
