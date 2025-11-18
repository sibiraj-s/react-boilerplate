import { describe, it, expect } from 'vitest';
import ReactDOM from 'react-dom/client';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    expect(App).toBeInstanceOf(Function);
    const div = document.createElement('div');
    const root = ReactDOM.createRoot(div);
    root.render(<App />);
    root.unmount();
  });
});
