<script>
  const genders = ["Women", "Girls"];
  const brands = [
    "Mitera",
    "KALINI",
    "ANAND SAREES",
    "DIVASTRI",
    "Anouk",
    "Saree mall",
    "Moda Rapido",
    "Charukrit",
  ];
  const colors = [
    "green",
    "pink",
    "blue",
    "black",
    "red",
    "yellow",
    "purple",
    "cyan",
  ];
</script>

<div class="w-72 text-xs flex flex-col items-center">
  <div class="filterContainer justify-between">
    <p class="text-sm font-bold">FILTERS</p>
    <p class="text-sm font-bold text-pink-500">CLEAR ALL</p>
  </div>
  <div class="filterContainer flex-col">
    {#each genders as gender}
      <div class="flex gap-3 checked:bg-pink-500">
        <input type="radio" />
        <p class="font-bold">{gender}</p>
      </div>
    {/each}
  </div>
  <div class="filterContainer flex-col">
    <div class="flex justify-between items-center">
      <p class="font-bold">BRANDS</p>
      <img class="icon" src="/icons/search.svg" alt="search" />
    </div>
    {#each brands as brand}
      <div class="flex gap-3">
        <input type="checkbox" />
        <p class="">{brand}</p>
      </div>
    {/each}
  </div>
  <div class="filterContainer flex-col">
    <p class="font-bold">PRICE</p>
    <input class="" type="range" min="0" max="100" />
    <p class="font-bold">₹1,900 - ₹6,200</p>
  </div>
  <div class="filterContainer flex-col">
    <div class="flex justify-between items-center">
      <p class="font-bold">COLORS</p>
      <img class="icon" src="/icons/search.svg" alt="search" />
    </div>
    {#each colors as color}
      <div class="flex gap-3 items-center">
        <input type="checkbox" />
        <div
          style="background-color: {color};"
          class="w-4 h-4 rounded-full"
        ></div>
        <p>{color[0].toUpperCase() + color.slice(1)}</p>
      </div>
    {/each}
  </div>
  <div class="filterContainer flex-col">
    <p class="font-bold"> DISCOUNT RANGE </p>
    {#each { length: 9 } as _, i }
      <div class="flex gap-3 checked:bg-pink-500">
        <input type="radio" />
        <p> {i + 1}0% and above </p>
      </div>
    {/each}
  </div>
</div>
