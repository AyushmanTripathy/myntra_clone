<script>
  import Card from "./Card.svelte";
  const { products } = $props();
</script>

<div
  class="grow grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3"
>
  {#each products as product}
    <Card {product} />
  {/each}
</div>
