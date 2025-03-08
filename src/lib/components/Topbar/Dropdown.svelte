<script>
  const { categories, color, name } = $props();
</script>

<div
  style="--border-color: {color};"
  class="dropdownButton group h-full flex items-center border-b-4 border-white"
>
  <p> {name} </p>
  <!-- <div class="absolute top-16 left-0 h-screen w-screen bg-black/25 hidden group-focus-within:block"></div> -->
  <div class="absolute top-16 left-[10vw] justify-center transition-all hidden group-hover:flex">
    <div class="grid grid-cols-5 bg-white min-w-[80vw] overflow-auto h-fit p-4 shadow animate-(--animate-fadein)">
    {#each Object.keys(categories) as category}
      <p style="color: {color};" class="text-sm font-bold"> {category} </p>
      {#each categories[category] as tag}
        <p class="text-sm hover:font-bold"> {tag} </p>
      {/each}
    {/each}
    </div>
  </div>
</div>
