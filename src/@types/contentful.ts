export type Review = {
  slug: string;
  title: string;
  tasteEvaluation: string;
  priceEvaluation: string;
  dokabilityEvaluation: string;
  shortvideo: {
    title: string;
    fileName: string;
    url: string;
  };
};
