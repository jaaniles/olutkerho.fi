import { createClient } from "contentful";

import { config } from "~/config";

export const getClient = () =>
  createClient({
    environment: "master",
    space: config.contentfulSpaceId,
    accessToken: config.contentfulAccessToken,
  });

export const contentfulQuery = async (query: string) => {
  const data = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${config.contentfulSpaceId}/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.contentfulAccessToken}`,
      },
      body: JSON.stringify({ query }),
    },
  );

  return data.json();
};
