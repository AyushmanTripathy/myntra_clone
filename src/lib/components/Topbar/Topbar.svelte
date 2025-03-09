<script>
  import Navbar from "./Navbar.svelte";
</script>

<div
  class="w-screen bg-white shadow z-10 flex justify-center sticky top-0 left-0"
>
  <div class="flex justify-between items-center min-w-[90vw]">
    <img class="h-16" src="/logo.webp" alt="Logo" />

    <Navbar />

    <div
      class="flex w-[30vw] max-w-xl p-2 rounded-md bg-gray-100 focus-within:bg-transparent border border-white focus-within:border-gray-300"
    >
      <img class="icon mr-4" src="/icons/search.svg" alt="" />
      <input
        type="text"
        class="outline-0 w-full"
        placeholder="Seach for products, brands and more"
      />
    </div>

    <div class="flex gap-6">
      <div class="actionButton">
        <img class="icon" src="/icons/profile.svg" alt="Profile" />
        <p>Profile</p>
      </div>
      <div class="actionButton">
        <img class="icon" src="/icons/favorite.svg" alt="" />
        <p>Wishlist</p>
      </div>
      <div class="actionButton">
        <img class="icon" src="/icons/bag.svg" alt="" />
        <p>Bag</p>
      </div>
    </div>
  </div>
</div>
