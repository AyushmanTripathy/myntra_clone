<script>
  import Card from "./Card.svelte";
  const { products } = $props();

  const PAGE_CAPACITY = 5 * 5;
  const pageCount = Math.ceil(products.length / PAGE_CAPACITY);

  let pageNo = $state(1);
  let displayedProducts = $state(products.slice(0, PAGE_CAPACITY));

  function viewPage(no) {
    pageNo = no;
    displayedProducts = products.slice(
      (pageNo - 1) * PAGE_CAPACITY,
      pageNo * PAGE_CAPACITY,
    );
  }

  const gotoOne = () => viewPage(1);
  const next = () => viewPage(pageNo + 1);
  const previous = () => viewPage(pageNo - 1);

  const filterButtons = [
    "Blouse",
    "Blouse Fabric",
    "Border",
    "Bundles",
    "Country of Origin",
    "Main Trend",
    "Multipack Set",
    "Net Quantity Unit",
    "Occasion",
    "Ornamentation",
    "Pattern",
    "Rating",
    "Size",
    "Sustaniable",
  ];
  const sortOptions = [
    "Recommemded",
    "What's New",
    "Popularity",
    "Better Discount",
    "Price: High to Low",
    "Price: Low to High",
    "Customer Rating",
  ];
</script>

<div class="grow">
  <div class="flex justify-between w-full pt-16 pb-6">
    <div class="flex flex-wrap gap-2 w-2xl">
      {#each filterButtons as btn}
        <div
          class="flex items-center justify-center w-fit rounded-2xl hover:bg-gray-200 gap-2 p-2 text-xs"
        >
          {btn}
          <img class="icon" src="/icons/arrow_down.svg" alt="" />
        </div>
      {/each}
    </div>
    <div
      class="relative group min-w-72 h-fit text-sm p-3 rounded-xs flex items-center justify-between border border-gray-300"
    >
      <p>
        Sort By : <strong>Recommended</strong>
      </p>
      <div class="absolute border-b border-l border-r border-gray-200 top-full left-0 w-full bg-white z-10 scale-0 shadow group-hover:scale-100">
        {#each sortOptions as option}
          <p class="p-2 pl-4 text-sm hover:bg-gray-200">{option}</p>
        {/each}
      </div>
      <img src="/icons/arrow_down.svg" alt="down" />
    </div>
  </div>
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
    <button
      onclick={previous}
      class="pageButton pageButtonHover"
      disabled={pageNo == 1}
    >
      <img class="rotate-90" src="/icons/arrow_down.svg" alt="Previous" />
      Previous
    </button>
    <p class="font-light text-sm">Page {pageNo} of {pageCount}</p>
    <button
      onclick={next}
      class="pageButton pageButtonHover"
      disabled={pageNo == pageCount}
    >
      Next
      <img class="rotate-[270deg]" src="/icons/arrow_down.svg" alt="Next" />
    </button>
  </div>
</div>
