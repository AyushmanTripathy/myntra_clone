<script>
  import Dropdown from "./Dropdown.svelte";

  const categories = {
    Topwear: [
      "T-Shirts",
      "Casual Shirts",
      "Formal Shirts",
      "Sweatshirts",
      "Sweaters",
      "Jackets",
      "Blazers & Coats",
      "Suits",
      "Rain Jackets",
    ],
    "Indian & Festive Wear": [
      "Kurtas & Kurta Sets",
      "Sherwanis",
      "Nehru Jackets",
      "Dhotis",
    ],
    Bottomwear: [
      "Jeans",
      "Casual Trousers",
      "Formal Trousers",
      "Shorts",
      "Track Pants & Joggers",
    ],
    "Innerwear & Sleepwear": [
      "Briefs & Trunks",
      "Boxers",
      "Vests",
      "Sleepwear & Loungewear",
      "Thermals",
    ],
    "Plus Size": [],
    Footwear: [
      "Casual Shoes",
      "Sports Shoes",
      "Formal Shoes",
      "Sneakers",
      "Sandals & Floaters",
      "Flip Flops",
      "Socks",
    ],
    "Personal Care & Grooming": [],
    "Sunglasses & Frames": [],
    Watches: [],
    "Sports & Active Wear": [
      "Sports Shoes",
      "Sports Sandals",
      "Active T-Shirts",
      "Track Pants & Shorts",
      "Tracksuits",
      "Jackets & Sweatshirts",
      "Sports Accessories",
      "Swimwear",
    ],
    Gadgets: ["Smart Wearables", "Fitness Gadgets", "Headphones", "Speakers"],
    "Fashion Accessories": [
      "Wallets",
      "Belts",
      "Perfumes & Body Mists",
      "Trimmers",
      "Deodorants",
      "Ties, Cufflinks & Pocket Squares",
      "Accessory Gift Sets",
      "Caps & Hats",
      "Mufflers, Scarves & Gloves",
      "Phone Cases",
      "Rings & Wristwear",
      "Helmets",
    ],
    "Bags & Backpacks": [],
    "Luggages & Trolleys": [],
  };
  const options = [
    {
      name: "MEN",
      color: "red",
      categories,
    },
    {
      name: "WOMEN",
      color: "magenta",
      categories,
    },
    {
      name: "KIDS",
      color: "blue",
      categories,
    },
    {
      name: "HOME & LIVING",
      color: "green",
      categories,
    },
    {
      name: "BEAUTY",
      color: "purple",
      categories,
    },
  ];
</script>

<div class="flex h-full items-center gap-2 w-fit">
  {#each options as { name, color, categories } }
    <Dropdown {name} {color} {categories} />
  {/each}
</div>
