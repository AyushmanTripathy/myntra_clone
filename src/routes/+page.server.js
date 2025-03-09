const products = [];

for (let i = 0; i < 53; i++) {
  products.push({
    images: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
      "/images/5.jpg",
    ],
    brand: "Anouk Rustic",
    salePrice: Math.floor(Math.random() * 2000),
    marketPrice: Math.floor(Math.random() * 2000) + 2000,
    title: "Ombre Pure Georgette Saree",
    showRating: Math.random() > 0.2 ? true : false,
    rating: 3.8,
    ratingCount: Math.floor(Math.random() * 10000),
    sizes: ["Onesize", "XL", "L"]
  });
}


export const load = async () => {
  return {
    products
  };
};
