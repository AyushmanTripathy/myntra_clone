<script>
  import Navbar from "./Navbar.svelte";
</script>

<div
  class="w-screen bg-white shadow z-10 flex justify-center sticky top-0 left-0"
>
  <div class="flex justify-between items-center min-w-[90vw]">
    <img class="h-16" src="/logo.webp" alt="Logo" />

    <Navbar />

    <div>
      <input type="text" placeholder="Search" />
    </div>

    <div class="flex gap-2">
      <p>Profile</p>
      <p>Wishlist</p>
      <p>Bag</p>
    </div>
  </div>
</div>
