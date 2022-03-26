import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type QuoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FriendMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GigMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Quote {
  readonly id: string;
  readonly Text?: string;
  readonly Attribution?: string;
  readonly ShowOnMobile?: boolean;
  readonly Order?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Quote, QuoteMetaData>);
  static copyOf(source: Quote, mutator: (draft: MutableModel<Quote, QuoteMetaData>) => MutableModel<Quote, QuoteMetaData> | void): Quote;
}

export declare class Friend {
  readonly id: string;
  readonly Name?: string;
  readonly Url?: string;
  readonly Index?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Friend, FriendMetaData>);
  static copyOf(source: Friend, mutator: (draft: MutableModel<Friend, FriendMetaData>) => MutableModel<Friend, FriendMetaData> | void): Friend;
}

export declare class Gig {
  readonly id: string;
  readonly Location?: string;
  readonly Url?: string;
  readonly DateName?: string;
  readonly DayName?: string;
  readonly DateTime?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Gig, GigMetaData>);
  static copyOf(source: Gig, mutator: (draft: MutableModel<Gig, GigMetaData>) => MutableModel<Gig, GigMetaData> | void): Gig;
}