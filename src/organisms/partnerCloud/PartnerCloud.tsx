import { usePartnersQuery } from "./partnerQueries";

import { Column } from "~/atoms/Column";
import { Grid } from "~/atoms/Grid";
import { H3 } from "~/atoms/typography/H3";

export const PartnerCloud = () => {
  const { data: partners } = usePartnersQuery();

  return (
    <div>
      <H3>Meitä tukemassa</H3>
      <Grid threeCol>
        {partners?.map((partner, i) => (
          <a href={partner.link} key={i}>
            <Column alignCenter>
              <p>{partner.name}</p>
              <img
                css={{ width: 64, height: "auto" }}
                src={partner.logo.url}
                alt={partner.logo.title}
              />
            </Column>
          </a>
        ))}
      </Grid>
    </div>
  );
};
