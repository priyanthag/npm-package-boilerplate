import Index from '@/src/index'
describe('Test Index', () => {
  test('should return the requested index', async () => {
    const index = new Index()
    expect(index.getIndex(1)).toEqual(2)
  })
})
