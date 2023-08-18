import {H3EventContext, NodeEventContext} from 'h3'

export interface Context {
  params: H3EventContext['params']
  req: NodeEventContext['req'] & {user: any}
  res: NodeEventContext['res']
  sessions: H3EventContext['sessions']
}
