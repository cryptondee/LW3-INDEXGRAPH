import axios from "axios";
export async function subGraphQuery(query) {
  try {
    const SUPGRAPH_URL =
      "https://thegraph.com/hosted-service/subgraph/cryptondee/lw3-graph";
    const response = await axios.post(SUPGRAPH_URL, {
      query,
    });
    if (response.data.errors) {
      console.error(response.data.errors);
      throw new Error(`Error making subgraph query ${response.data.error}`);
    }
    return response.data.data;
  } catch (err) {
    console.error(err);
    throw new Error(`Could not query ${error.message}`);
  }
}
