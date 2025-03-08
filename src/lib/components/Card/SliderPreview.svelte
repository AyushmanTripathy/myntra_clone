<script>
  import { onMount } from "svelte";

  const { product } = $props();
  const { images, sizes } = product;

  let caroselElement = null;
  function scroll(index) {
    if (index > images.length) {
      index = 0;
      caroselElement.scrollTo({
        top: 0,
        left: 0
      })
    }

    setTimeout(() => {
      if (!caroselElement) return;

      index++;
      caroselElement.scrollTo({
        top: 0,
        left: index * caroselElement.getBoundingClientRect().width,
        behavior: "smooth",
      });

      scroll(index);
    }, 1000);
  }

  onMount(() => {
    scroll(0);
  });
</script>

<div
  bind:this={caroselElement}
  class="w-full flex aspect-3/4 overflow-hidden relative"
>
  {#each images as imageURL, index}
    <img class="w-full aspect-3/4" src={imageURL} alt={index} />
  {/each}
  <img class="w-full aspect-3/4" src={images[0]} alt="replica" />
</div>
<!-- Wishlist Button -->
<div class="p-2 pb-0 absolute bottom-0 left-0 bg-white w-full">
  <button class="border border-green-800 p-1 w-full"> Wishlist </button>
  <p class="text-sm font-light p-1">Sizes: {sizes.join(", ")}</p>
</div>
