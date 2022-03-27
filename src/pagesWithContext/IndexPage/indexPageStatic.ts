import { GetStaticPaths, GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/types/hydration";

import { getReviews } from "./indexPageQueries";

import { getPartners } from "~/organisms/partnerCloud/partnerQueries";

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("reviews", getReviews());
  await queryClient.prefetchQuery("partners", getPartners());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});
