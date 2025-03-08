<script>
  const { product } = $props();
  const { images, brand, title, salePrice, marketPrice, showRating, rating, ratingCount } =
    product;

  const ratingCountFormatted = $derived(ratingCount > 1000 ? Math.floor(ratingCount / 100) / 10 + "k": ratingCount);
</script>

<div class="flex justify-center items-center">
  <div class="flex flex-col border w-[200px]">
    <div class="w-full aspect-3/4 bg-cover bg-[url(/images/1.jpg)] relative">
      {#if showRating}
        <div class="bg-white opacity-70 rounded-md w-fit p-1 text-xs font-bold absolute bottom-2 left-2"> {rating} | {ratingCountFormatted} </div>
      {/if}
    </div>
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
