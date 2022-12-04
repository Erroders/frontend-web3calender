export const fetchWeb3Events = ({ creatorId }: { creatorId: string }) => `
query MyQuery {
    web3Events(where: {creator: "${creatorId}"}) {
      id
      title
      startTime
      recipientList
      endTime
      description
      creator
      attendees {
        address
        id
        rsvpResponse
        status
      }
      comments {
        comment
        id
        postedOn
      }
    }
  }
`;
