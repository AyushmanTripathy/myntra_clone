<script>
  import CardsContainer from "$lib/components/Card/Container.svelte";
  import FilterOptions from "$lib/components/FilterOptions.svelte";
  import Topbar from "$lib/components/Topbar/Topbar.svelte";
  import MobileContainer from "$lib/components/Card/MobileContainer.svelte";
  import MobileTopbar from "$lib/components/Topbar/MobileTopbar.svelte";
  import { onMount } from "svelte";

  const { data } = $props();

  let innerWidth = $state(false);
  let isMobile = $derived(innerWidth < 1200);
</script>

<svelte:window bind:innerWidth />

{#if isMobile}
  <!--Mobile UI -->
  <div class="flex flex-col items-center min-h-screen w-screen">
    <MobileTopbar />
    <MobileContainer products={data.products} />
  </div>
{:else}
  <!-- Desktop UI -->
  <div class="flex flex-col items-center min-h-screen w-screen">
    <Topbar />
    <div class="flex justify-center pt-16 pb-3 max-w-[1680px] w-screen">
      <FilterOptions />
      <CardsContainer products={data.products} />
    </div>
  </div>
{/if}
