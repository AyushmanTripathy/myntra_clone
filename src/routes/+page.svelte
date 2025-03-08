<script>
  import CardsContainer from "$lib/components/Card/Container.svelte";
  import FilterOptions from "$lib/components/FilterOptions.svelte";

  const { data } = $props();
</script>

<div class="flex flex-col items-center min-h-screen w-screen">
  <div class="w-screen sticky top-0 left-0"> Navbar </div>
  <div
    class="flex border border-black max-w-[1680px] w-screen"
  >
    <FilterOptions />
    <CardsContainer products={data.products}/>
  </div>
</div>
