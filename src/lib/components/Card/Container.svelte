<script>
  import Card from "./Card.svelte";
  const { products } = $props();

  const PAGE_CAPACITY = 5 * 5;
  const pageCount = Math.ceil(products.length / PAGE_CAPACITY);

  let pageNo = $state(1);
  let displayedProducts = $state(products.slice(0, PAGE_CAPACITY))

  function viewPage(no) {
    pageNo = no;
    displayedProducts = products.slice((pageNo - 1) * PAGE_CAPACITY, pageNo * PAGE_CAPACITY);
  }

  const gotoOne = () => viewPage(1);
  const next = () => viewPage(pageNo + 1);
  const previous = () => viewPage(pageNo - 1);
</script>

<div class="grow">
  <div
    class="grow pb-7 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3"
  >
    {#each displayedProducts as product}
      <Card {product} />
    {/each}
  </div>
  <div class="grow flex justify-center items-center gap-6">
    <button onclick={gotoOne} class="pageButton" disabled={pageNo == 1}>
      <img src="/icons/double_arrow_left.svg" alt="Page 1" />
      Page 1
    </button>
    <button onclick={previous} class="pageButton pageButtonHover" disabled={pageNo == 1}>
      <img class="rotate-90" src="/icons/arrow_down.svg" alt="Previous" />
      Previous
    </button>
    <p class="font-light text-sm"> Page {pageNo} of {pageCount} </p>
    <button onclick={next} class="pageButton pageButtonHover" disabled={pageNo == pageCount}>
      Next
      <img class="rotate-[270deg]" src="/icons/arrow_down.svg" alt="Next">
    </button>
  </div>
</div>
