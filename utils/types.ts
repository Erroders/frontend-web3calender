export type PushNotificationFeed = {
  app: string;
  blockchain: string;
  cta: string;
  icon: string;
  image: string;
  message: string;
  notification: {
    body: string;
    title: string;
  };
  sid: string;
  title: string;
  url: string;
};

export type Web3Event = {
  creator: string;
  description: string;
  endTime: string;
  id: string;
  recipientList: string;
  startTime: string;
  title: string;
  attendees: Attendee[];
  comments: Comment[];
};

export type Attendee = {
  address: string;
  id: string;
  rsvpResponse: string;
  status: string;
};

export type Comment = {
  postedOn: string;
  comment: string;
};
