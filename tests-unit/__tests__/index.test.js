import Index from '@/src/index'
import logger from '@/src/lib/logger'
describe('Test Index', () => {
  test('test the logger attribute of the index class', async () => {
    const i = new Index()
    expect(i.logger).toEqual(logger)
  })
})
