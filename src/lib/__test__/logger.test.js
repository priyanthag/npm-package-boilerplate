import logger from '../logger'
describe('Logger test', () => {
  test('should logger be a instance of winston', () => {
    expect(logger.level).toBe('info')
  })
})
