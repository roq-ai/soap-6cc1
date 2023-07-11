import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  pickup_time: yup.date(),
  dropoff_time: yup.date(),
  status: yup.string(),
  business_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
