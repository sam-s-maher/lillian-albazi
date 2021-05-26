// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Friend, Gig } = initSchema(schema);

export {
  Friend,
  Gig
};