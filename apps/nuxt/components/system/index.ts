import {InjectionKey, Plugin} from 'vue'
import {getWindow} from '@byte-abc/utils'

export interface ComponentSystemContext {
  modalTargetId: string
}

const COMPONENT_SYSTEM_INJECTION_KEY: InjectionKey<ComponentSystemContext> =
  Symbol('ComponentSystem')

const appendModalTarget = (id: string = 'modal-target') => {
  const window = getWindow()
  const document = window?.document

  if (!document) {
    return
  }
  const modalTarget = document.createElement('div')
  modalTarget.id = id
  document.body.append(modalTarget)
}

export const createComponentSystemContext = (modalTargetId: string): ComponentSystemContext => {
  return {
    modalTargetId,
  }
}

export interface ComponentSystemOptions {
  modalTargetId?: string
}

export const useComponentSystem = (): ComponentSystemContext => {
  return inject(COMPONENT_SYSTEM_INJECTION_KEY) ?? ({} as ComponentSystemContext)
}

export const componentSystemPlugin: Plugin = (app, options: ComponentSystemOptions = {}) => {
  const {modalTargetId = 'modal-target'} = options
  appendModalTarget()

  app.provide(COMPONENT_SYSTEM_INJECTION_KEY, createComponentSystemContext(modalTargetId))
}
