const requireEnv = (env: string | undefined): string => {
  if (!env) {
    throw new Error("Environment variable is missing!");
  }

  return env;
};

export const config = {
  contentfulSpaceId: requireEnv(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID),
  contentfulAccessToken: requireEnv(
    process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  ),
};
