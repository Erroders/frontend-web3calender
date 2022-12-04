import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

// const APIURL = process.env.NEXT_PUBLIC_THE_GRAPH_API_URI ?? "";

const APIURL = "https://api.thegraph.com/subgraphs/name/erroders/web3calender";

export async function executeQuery(query: string) {
  const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
  });

  return await client
    .query({
      query: gql(query),
    })
    .then((data) => {
      console.log("Query executed successfully!");
      return data.data;
    })
    .catch((error) => {
      console.log("Error while executing query: ", error);
    });
}
