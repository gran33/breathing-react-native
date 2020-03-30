xdescribe('http', () => {
  let http: any;
  let mockFetch: any;
  const fakeUrl = 'http://url.com';
  const fakeHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  beforeEach(() => {
    // @ts-ignore
    global.fetch = jest.fn();
    // @ts-ignore
    mockFetch = global.fetch;

    http = require('./http');
  });

  it('validates response ok', async () => {
    mockFetch.mockReturnValue(Promise.resolve({ok: false, status: 'TheStatusCode'}));
    try {
      await http.get('TheUrl');
      fail('expected to throw');
    } catch (e) {
      expect(e).toEqual(new Error('failed for TheUrl, status TheStatusCode'));
    }
  });

  it('returns json response', async () => {
    mockFetch.mockReturnValue(Promise.resolve({ok: true, json: () => Promise.resolve('hello world!')}));
    const result = await http.get();
    expect(result).toEqual('hello world!');
  });

  it('should call fetch with GET', async () => {
    const data = 'hello world!';
    mockFetch.mockReturnValueOnce(Promise.resolve({ok: true, json: () => Promise.resolve(data)}));
    let result = await http.get(fakeUrl);
    expect(mockFetch).toHaveBeenCalledWith(fakeUrl, {headers: {...fakeHeaders}, method: 'GET'});
    expect(result).toEqual(data);

    mockFetch.mockReturnValueOnce(Promise.resolve(data));
    result = await http.getWithoutParse(fakeUrl, {});
    expect(mockFetch).toHaveBeenCalledWith(fakeUrl, {headers: {...fakeHeaders}, method: 'GET'});
    expect(result).toEqual(data);
  });

  it('should call fetch with POST', async () => {
    const data = 'hello world!';
    const body = 'hello body!';
    mockFetch.mockReturnValue(Promise.resolve({ok: true, json: () => Promise.resolve(data)}));
    const result = await http.post(fakeUrl, {}, body);
    expect(mockFetch).toHaveBeenCalledWith(fakeUrl, {
      headers: {...fakeHeaders},
      method: 'POST',
      body: JSON.stringify(body)
    });
    expect(result).toEqual(data);
  });

  it('should call fetch with PUT', async () => {
    const data = 'hello world!';
    const body = 'hello body!';
    mockFetch.mockReturnValue(Promise.resolve({ok: true, json: () => Promise.resolve(data)}));
    const result = await http.put(fakeUrl, {}, body);
    expect(mockFetch).toHaveBeenCalledWith(fakeUrl, {
      headers: {...fakeHeaders},
      method: 'PUT',
      body: JSON.stringify(body)
    });
    expect(result).toEqual(data);
  });

  it('should call fetch with GET and avoid parse response as JSON', async () => {
    const data = 'hello world!';
    mockFetch.mockReturnValue(Promise.resolve({ok: true, json: () => Promise.resolve(data)}));
    const result = await http.get(fakeUrl);
    expect(mockFetch).toHaveBeenCalledWith(fakeUrl, {headers: {...fakeHeaders}, method: 'GET'});
    expect(result).toEqual(data);
  });
});
