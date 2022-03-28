import { usePartnersQuery } from "./partnerQueries";

import { Column } from "~/atoms/Column";
import { Grid } from "~/atoms/Grid";
import { Section } from "~/atoms/Section";

export const PartnerCloud = () => {
  const { data: partners } = usePartnersQuery();

  return (
    <Section>
      <Column alignCenter>
        <h6>Meitä tukemassa:</h6>
        <Grid twoCol>
          {partners?.map((partner, i) => (
            <a href={partner.link} key={i}>
              <Column alignCenter>
                <img
                  css={{ width: 64, height: "auto" }}
                  src={partner.logo.url}
                  alt={partner.logo.title}
                />
              </Column>
            </a>
          ))}
        </Grid>
      </Column>
    </Section>
  );
};
