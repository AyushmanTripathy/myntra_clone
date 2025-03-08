export const load = async () => {
  const product = {
    images: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
      "/images/5.jpg",
    ],
    brand: "Anouk Rustic",
    salePrice: 699,
    marketPrice: 3999,
    title: "Ombre Pure Georgette Saree",
    rating: 3.8,
    ratingCount: 2200,
  };
  return {
    products: new Array(13).fill(product)
  };
};
