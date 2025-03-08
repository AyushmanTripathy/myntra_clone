<script>
  import Card from "./Card.svelte";
  const { products } = $props();
</script>

<div class="grow grid grid-cols-5 gap-3">
  {#each products as product }
    <Card product={product} />
  {/each}
</div>
