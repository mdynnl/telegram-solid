export const Bar = () => (
  <div class="grid gap-2 grid-cols-[auto_1fr] items-center p-1.5 text-gray-400">
    <button
      onclick={() => {}}
      class="grid place-items-center h-10 w-10 rounded-full outline-none focus:bg-[#fff1] hover:bg-[#fff1]"
      aria-label="Menu"
      title="Menu"
    >
      <div class="i-mdi:menu h-6 w-6" />
    </button>
    <div class="bg-[#fff1] rounded-full relative border-2 focus-within:border-[currentColor] border-transparent ">
      <input class="h-10 px-10 text-white bg-transparent w-full outline-none" placeholder="Search" />
      <div class="absolute top-0 left-0 w-10 h-10 grid place-items-center">
        <div class="i-mdi:search h-6 w-6" />
      </div>
      <div class="absolute top-0 right-0 w-10 h-10 grid place-items-center">
        <div class="i-mdi:loading h-6 w-6" />
      </div>
      <button class="absolute top-0 right-0 w-10 h-10 grid place-items-center outline-none focus:bg-[#fff1] hover:bg-[#fff1] rounded-full cursor-pointer">
        <div class="i-mdi:close h-5 w-5" />
      </button>
    </div>
  </div>
)
