export const formatRatingCount = (ratingCount) =>
  ratingCount > 1000 ? Math.floor(ratingCount / 100) / 10 + "k" : ratingCount
