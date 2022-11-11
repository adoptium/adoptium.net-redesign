import { renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { fetchNewsItems } from '../fetchNews';
import { mockNewsAPI, mockEventsAPI  } from '../../__fixtures__/hooks';

global.fetch = vi.fn()
  .mockImplementation((url: URL) => {
    switch (url.pathname) {
      case '/api/news':
        return Promise.resolve({
          json: () => Promise.resolve(mockNewsAPI())
        });
      case '/api/events':
        return Promise.resolve({
          json: () => Promise.resolve(mockEventsAPI())
        });
    }
  });

afterEach(() => {
  vi.clearAllMocks();
});

describe('fetchNewsItems', () => {
  it('returns valid news and events object', async () => {
    const { result } = renderHook(() => fetchNewsItems(true, 1));
    await waitFor(() => {
      expect(result.current?.news.news[0].title).toBe('news_title_mock')
      expect(result.current?.events[0].title).toBe('events_title_mock')
    }, { interval: 1 });
    expect(global.fetch).toHaveBeenCalledTimes(2)
    expect(result.current).toMatchSnapshot()
  })
});