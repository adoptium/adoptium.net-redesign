import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest'
import Layout from '..';

// Mock the Banner component as this changes frequently
vi.mock('../../Banner', () => {
  return {
    default: () => <div>mock-banner</div>,
  };
})

// Mock the NavBar component as this is tested separately
vi.mock('../../NavBar', () => {
  return {
    default: () => <div>mock-navbar</div>,
  };
})

// Mock the Footer component as this is tested separately
vi.mock('../../Footer', () => {
  return {
    default: () => <div>mock-footer</div>,
  };
})

describe('Layout component', () => {
  it('renders correctly with data', () => {
    const { container } = render(
      <Layout>
        mock-children
      </Layout>
    );
    expect(container).toMatchSnapshot();
  });
});