<script>
  const { product } = $props();
  const { images, brand, title, salePrice, marketPrice, rating, ratingCount } =
    product;
</script>

<div class="flex justify-center items-center">
  <div class="flex flex-col border w-[200px]">
    <img class="w-full" src={images[0]} alt="Thumnail" />
    <div class="p-2">
      <h1 class="font-bold">{brand}</h1>
      <p class="font-light text-sm">{title}</p>
      <p>
        <strong class="text-sm">Rs. {salePrice} </strong>
        <span class="font-light text-xs line-through"> Rs. {marketPrice}</span>
        <span class="text-orange-400 text-xs"
          >(Rs. {marketPrice - salePrice}OFF)</span
        >
      </p>
    </div>
  </div>
</div>
