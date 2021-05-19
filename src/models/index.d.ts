import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Friend {
  readonly id: string;
  readonly Name?: string;
  readonly Url?: string;
  constructor(init: ModelInit<Friend>);
  static copyOf(source: Friend, mutator: (draft: MutableModel<Friend>) => MutableModel<Friend> | void): Friend;
}

export declare class Gig {
  readonly id: string;
  readonly Location?: string;
  readonly Url?: string;
  readonly DateName?: string;
  readonly DayName?: string;
  constructor(init: ModelInit<Gig>);
  static copyOf(source: Gig, mutator: (draft: MutableModel<Gig>) => MutableModel<Gig> | void): Gig;
}