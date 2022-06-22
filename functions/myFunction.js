const fetch = require("node-fetch");
const urlencode = require("urlencode");
const YOUTUBE_SEARCH_ENDPOINT = "https://www.googleapis.com/youtube/v3/search";

exports.handler = async (event) => {
  try {
    const { queryStringParameters } = event;
    const parameters = Object.entries(queryStringParameters)
      .map(([key, value]) => `${key}=${urlencode.encode(value)}`)
      .join("&")
      .concat(`&key=${process.env.REACT_APP_FIRST_SECRET}`);
    const URI = `${YOUTUBE_SEARCH_ENDPOINT}?${parameters}`;
    const response = await fetch(URI);
    const { status, statusText, ok, headers } = response;
    const body = JSON.stringify(await response.json());
    headers["Access-Control-Allow-Origin"] = process.env.HOST;

    return {
      statusCode: status,
      statusText,
      ok,
      headers,
      body,
    };
  } catch (error) {
    return {
      statusCode: 404,
      statusText: error.message,
      ok: false,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  }
};
