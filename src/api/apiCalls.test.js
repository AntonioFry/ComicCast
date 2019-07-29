import { getCharacters } from './apiCalls';

describe('apiCalls', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
      { name: 'guy', id: 1, image: 'image.jpg', key: 1 },
      { name: 'peep', id: 2, image: 'image.jpg', key: 2 },
      { name: 'gal', id: 3, image: 'image.jpg', key: 3 },
      { name: 'dude', id: 4, image: 'image.jpg', key: 4 }
    ]
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should fetch characters given the correct url', () => {
    const expected = 'https://api.sheety.co/50e47574-a7cb-4e95-8550-1975896a4e3e';
    getCharacters();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should')

});