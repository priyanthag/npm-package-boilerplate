import Index from '../index'
import logger from '../lib/logger'
describe('Test Index', () => {
  test('test the logger attribute of the index class', async () => {
    const i = new Index()
    expect(i.logger).toEqual(logger)
  })
})
