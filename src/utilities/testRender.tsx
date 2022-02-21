import React, { FC } from 'react';
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { RootState, initStore } from '../state/store';

interface Render {
  ui: React.FC;
  preloadedState?: PreloadedState<RootState>;
  renderOptions?: RenderOptions;
}

const render = ({
  ui,
  preloadedState,
  renderOptions = {},
}: Render): RenderResult => {
  const store = initStore(preloadedState);
  const Wrapper: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  const Component = ui;
  return rtlRender(<Component />, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
