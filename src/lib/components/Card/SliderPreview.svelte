<script>
  import { onMount } from "svelte";

  const { product } = $props();
  const { images, sizes } = product;

  let dots = null;
  let caroselElement = null;

  function scroll(index) {
    if (index > images.length) {
      index = 0;
      caroselElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }

    dots.childNodes[index >= images.length ? 0 : index].classList.add(
      "dotActive",
    );

    setTimeout(() => {
      if (!caroselElement) return;
      dots.childNodes[index >= images.length ? 0 : index].classList.remove(
        "dotActive",
      );

      index++;
      caroselElement.scrollTo({
        top: 0,
        left: index * caroselElement.getBoundingClientRect().width,
        behavior: "smooth",
      });

      scroll(index);
    }, index == 0 ? 200 : 1500);
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
  <div
    bind:this={dots}
    class="pb-1 w-full flex justify-center items-center gap-2"
  >
    {#each { length: images.length } as _}
      <div class="h-2 w-2 bg-gray-400 rounded-2xl"></div>
    {/each}
  </div>
  <button class="border flex justify-center items-center gap-3 font-bold text-xs border-gray-400 hover:border-black rounded-sm p-1 w-full"> 
    <img src="/icons/favorite.svg" alt="wishlist">
  WISHLIST </button>
  <p class="text-sm font-light p-1">Sizes: {sizes.join(", ")}</p>
</div>
