<script>
  import StaticPreview from "./StaticPreview.svelte";
  import SliderPreview from "./SliderPreview.svelte";
  const { product } = $props();
  const { salePrice, marketPrice, showRating } = product;

  let hovering = $state(false);
  let cardEle = null;
  const mouseEntered = () => { 
    hovering = true
    setTimeout(() => {
      if (!cardEle.matches(":hover")) hovering = false;
    }, 200)
  }
  const mouseLeft = () => hovering = false;
</script>

<div class="flex justify-center items-center">
  <div
    bind:this={cardEle}
    onmouseenter={mouseEntered}
    onmouseleave={mouseLeft}
    role="img"
    class="flex h-full cursor-pointer flex-col w-[220px]"
  >
    <div class="w-full h-full relative">
      {#if hovering}
        <SliderPreview {product} />
      {:else}
        <StaticPreview {product} />
      {/if}
    </div>
    <div class="p-2 pt-0">
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
