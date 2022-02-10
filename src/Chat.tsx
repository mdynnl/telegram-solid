import { JSX } from 'solid-js'
export const Chat = $component<{ active?: boolean } & JSX.HTMLAttributes<HTMLDivElement>>(({ active, ...rest }) => {
  return (
    <div
      {...rest}
      tabindex={0}
      class="outline-none text-gray-400 grid grid-cols-[auto_1fr] gap-2 p-2 cursor-pointer"
      classList={{ 'bg-blue-900 text-white': active, 'hover:bg-[#fff1] focus:bg-[#fff1]': !active }}
    >
      <div class="h-13 w-13 rounded-full bg-gray-900" />
      <div class="grid align-items-center">
        <div class="grid grid-cols-[1fr_auto]">
          <div class="font-bold text-lg">Trio</div>
          <div class="text-xs flex">
            <div class="i-mdi:check" />
            <div class="i-mdi:check-all" />
            17:16
          </div>
        </div>
        <div class="text-sm overflow-hidden" style={{ 'text-overflow': 'ellipsis', 'white-space': 'nowrap' }}>
          I will I willI willI willI willI willI willI willI willI willI willI willI willI willI willI willI will
        </div>
      </div>
    </div>
  )
})
