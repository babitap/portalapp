export default {
  post: jest.fn(),

  get: jest.fn().mockResolvedValue({data: {}})
}