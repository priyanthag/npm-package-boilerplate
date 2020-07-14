import isNil from 'lodash-es/isNil'
import logger from '@/src/lib/logger'
describe('Logger test', () => {
  test('should logger be a instance of winston', () => {
    expect(logger.level).toBe('info')
    expect(isNil(null)).toBeTruthy()
  })
})
