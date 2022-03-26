import { Card } from "./Card";
import { H2 } from "./typography/H2";
import { H3 } from "./typography/H3";

import { Review } from "~/@types/contentful";

export const ReviewThumbnail = ({ review }: { review: Review }) => (
  <Card>
    <H3>Arvio</H3>
    <H2>{review.title}</H2>
  </Card>
);
