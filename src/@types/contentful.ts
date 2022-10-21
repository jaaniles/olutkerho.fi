export type Review = {
  slug: string;
  title: string;
  brewery: string;
  date: string;
  tasteEvaluation: string;
  priceEvaluation: string;
  dokabilityEvaluation: string;
  shortvideo: {
    title: string;
    fileName: string;
    url: string;
  };
};

export type Partner = {
  slug: string;
  name: string;
  logo: {
    title: string;
    filename: string;
    url: string;
  };
  link: string;
};
