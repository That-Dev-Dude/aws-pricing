import { Responder as ResponseHandler, ResponseBody } from '@caldwell619/common-aws-actions'

const corsUrl = (process.env.CORS_URL as string) || '*'
const Responder = new ResponseHandler({ corsUrl, httpMethod: 'POST' })

export const respond = async <Body>(body: Body, statusCode: number): Promise<ResponseBody> => {
  return Responder.respond(body, statusCode)
}
