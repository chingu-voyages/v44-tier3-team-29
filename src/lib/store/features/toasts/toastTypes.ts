type TToastTypes = 'info' | 'success' | 'warning'

interface IToast {
  uid: string
  message: string
  type: TToastTypes
}

export interface IToastListState {
  toasters: IToast[]
}

export interface IAddToastPayload extends Omit<IToast, 'uid'> {}

export type TToastPayload = string | IAddToastPayload
