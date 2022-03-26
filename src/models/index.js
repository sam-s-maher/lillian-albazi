// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Quote, Friend, Gig } = initSchema(schema);

export {
  Quote,
  Friend,
  Gig
};