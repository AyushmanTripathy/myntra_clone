<script>
  const { product } = $props();
  const { images, brand, title, rating, showRating, ratingCount } = product;
  const ratingCountFormatted = $derived(
    ratingCount > 1000 ? Math.floor(ratingCount / 100) / 10 + "k" : ratingCount,
  );
</script>

<div class="w-full aspect-3/4 bg-cover bg-[url(/images/1.jpg)] relative">
  {#if showRating}
    <div
      class="bg-white opacity-70 rounded-md w-fit p-1 text-xs font-bold absolute bottom-2 left-2"
    >
      {rating} | {ratingCountFormatted}
    </div>
  {/if}
</div>
<div class="p-2 pb-0">
  <h1 class="font-bold">{brand}</h1>
  <p class="font-light text-sm">{title}</p>
</div>
