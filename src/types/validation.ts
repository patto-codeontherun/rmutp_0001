export interface PhoneNumberData {
  mobile: string;
}

export interface CardIdData {
  cardId: string;
}

export interface LifecycleEvent<T = any> {
  params: {
    data: T;
    where?: any;
    select?: any;
  };
}

export type PhoneNumberEvent = LifecycleEvent<PhoneNumberData>;
export type CardIdEvent = LifecycleEvent<CardIdData>;