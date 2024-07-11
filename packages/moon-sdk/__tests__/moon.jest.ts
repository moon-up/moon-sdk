import { createClient, SupabaseClient } from '@supabase/supabase-js';

import { MoonSDK } from './moon';

jest.mock('@supabase/supabase-js');

describe('MoonSDK', () => {
  let moonSDK: MoonSDK;
  let mockSupabaseClient: jest.Mocked<SupabaseClient>;

  beforeEach(() => {
    mockSupabaseClient = createClient(
      'https://api.usemoon.ai',
      'test-key'
    ) as jest.Mocked<SupabaseClient>;
    moonSDK = new MoonSDK({ authInstance: mockSupabaseClient });
  });

  it('should create a new instance of MoonSDK', () => {
    expect(moonSDK).toBeInstanceOf(MoonSDK);
  });

  it('should set isAuthenticated to false by default', () => {
    expect(moonSDK.isAuthenticated).toBe(false);
  });

  describe('connect', () => {
    it('should set isAuthenticated to true if connection is successful', async () => {
      mockSupabaseClient.auth.getSession.mockResolvedValueOnce({
        data: { session: { access_token: 'test-token' } },
        error: null,
      });

      await moonSDK.connect();

      expect(moonSDK.isAuthenticated).toBe(true);
    });

    it('should throw an error if connection fails', async () => {
      mockSupabaseClient.auth.getSession.mockResolvedValueOnce({
        data: null,
        error: new Error('Connection failed'),
      });

      await expect(moonSDK.connect()).rejects.toThrow('Connection failed');
    });
  });

  describe('disconnect', () => {
    it('should set isAuthenticated to false', async () => {
      await moonSDK.disconnect();

      expect(moonSDK.isAuthenticated).toBe(false);
    });
  });

  // Add more tests for other methods...
});
