import { useQuery } from "react-query";

import { Partner } from "~/@types/contentful";
import { contentfulQuery } from "~/services/contentful";

const partnerQuery = `
{
  partnerCollection {
    items {
      slug
      name
      logo {
        title
        url
        fileName
      }
      link
    }
  }
}
`;

export const getPartners = () => async () => {
  const { data } = await contentfulQuery(partnerQuery);

  return data.partnerCollection.items as Partner[];
};

export function usePartnersQuery() {
  return useQuery("partners", getPartners());
}
