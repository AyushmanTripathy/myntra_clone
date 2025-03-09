<script>
  import StaticPreview from "./StaticPreview.svelte";
  import { formatRatingCount } from "$lib/index.js";

  const { products } = $props();
</script>

<div class="w-full pt-5 grid gap-1 grid-cols-2">
  {#each products as { brand, showRating, ratingCount, rating, title, salePrice, images, marketPrice }}
    <div class="">
      <div
        style="background-image: url({images[0]});"
        class="h-72 bg-cover relative"
      >
        {#if showRating}
          <div
            class="bg-white opacity-70 rounded-md w-fit p-1 text-xs font-bold absolute bottom-2 left-2"
          >
            {rating} | {formatRatingCount(ratingCount)}
          </div>
        {/if}
      </div>
      <div class="p-2 pb-0">
        <div class="font-bold flex justify-between text-sm">{brand}
          <img class="icon" src="/icons/favorite.svg" alt="">
        </div>
        <p class="font-light text-xs">{title}</p>
      </div>
      <div class="p-2 pt-0">
        <p>
          <strong class="text-xs">₹{salePrice} </strong>
          <span class="font-light text-xs line-through"> ₹{marketPrice}</span>
          <span class="text-orange-400 text-xs"
            >(₹{marketPrice - salePrice}OFF)</span
          >
        </p>
      </div>
    </div>
  {/each}
</div>
