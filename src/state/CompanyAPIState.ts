import { NatsConnection } from 'nats';

export type CompanyAPIState = {
  NATS: NatsConnection;
  
  Random: string;
  
  Reply: any;
};
