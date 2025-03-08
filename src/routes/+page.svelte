<script>
  import CardsContainer from "$lib/components/Card/Container.svelte";
  import FilterOptions from "$lib/components/FilterOptions.svelte";
  import Topbar from "$lib/components/Topbar/Topbar.svelte";

  const { data } = $props();
</script>

<div class="flex flex-col items-center min-h-screen w-screen">
  <Topbar />
  <div class="flex pt-3 max-w-[1680px] w-screen">
    <FilterOptions />
    <CardsContainer products={data.products} />
  </div>
</div>
