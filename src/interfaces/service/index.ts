import { BusinessInterface } from 'interfaces/business';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ServiceInterface {
  id?: string;
  business_id?: string;
  user_id?: string;
  pickup_time?: any;
  dropoff_time?: any;
  status?: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  business_id?: string;
  user_id?: string;
  status?: string;
}
