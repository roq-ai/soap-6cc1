import { BusinessInterface } from 'interfaces/business';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SubscriptionInterface {
  id?: string;
  business_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  user?: UserInterface;
  _count?: {};
}

export interface SubscriptionGetQueryInterface extends GetQueryInterface {
  id?: string;
  business_id?: string;
  user_id?: string;
}
