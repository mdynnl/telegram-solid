import { useParams } from 'solid-app-router'
import styles from './index.module.css'

export const Messages = $component<{ ref?: (v: string) => void }>(({ ref }) => {
  const params = useParams<{ id: string }>()
  console.log('hello')
  $: ref?.(params.id)

  return (
    <div class="text-gray-400 grid grid-rows-[auto_1fr_auto] h-100% bg-black">
      <div class="grid gap-2 grid-cols-[auto_auto_1fr_auto] items-center p-2  bg-[#fff1]">
        <button
          onpointerdown={() => history.back()}
          class="grid place-items-center h-10 w-10 rounded-full outline-none focus:bg-[#fff1]  hover:bg-[#fff1]"
          aria-label="Back"
          title="Back"
        >
          <div class="i-mdi:arrow-left h-7 w-7" />
        </button>
        <div onclick={() => {}} class="cursor-pointer rounded-full bg-black w-10 h-10" />
        <div onclick={() => {}} class="cursor-pointer grid leading-none">
          <div class="font-bold">Trio</div>
          <div class="text-sm">last seen recently</div>
        </div>
        <button
          onclick={() => {}}
          class="grid place-items-center h-10 w-10 rounded-full outline-none focus:bg-[#fff1] hover:bg-[#fff1]"
          aria-label="More actions"
          title="More actions"
        >
          <div class="i-mdi:dots-vertical h-6 w-6" />
        </button>
      </div>
      <div class={`grid gap-1 p-2 pr-1 text-white ${styles.scroll}`}>
        {Array(30)
          .fill(0)
          .map(() => (
            <>
              <div class="bg-blue px-3 py-1.25 rounded-l-2xl rounded-r-md justify-self-end">1990909302j fjlafjsd</div>
              <div class="bg-blue px-3 py-1.25 rounded-r-2xl rounded-l-md justify-self-start">
                jfjasjf;slkfj fs a9f 2
              </div>
            </>
          ))}
      </div>
      <div class="grid grid-cols-[1fr_auto_auto_auto] p-2 gap-2 border-[#fff1] border-t">
        <div class="grid grid-cols-[auto_1fr_auto] bg-[#fff1] rounded-xl">
          <button onclick={() => {}} class="grid place-items-center h-11.5 w-11.5" aria-label="Emoji" title="Emoji">
            <div class="i-mdi:emoji-outline h-6 w-6" />
          </button>
          <input class="text-white bg-transparent outline-none" placeholder="Message" />
          <button onclick={() => {}} class="grid place-items-center h-11.5 w-11.5" aria-label="File" title="File">
            <div class="i-mdi:paperclip h-6 w-6 rotate-40" />
          </button>
        </div>
        <button
          onclick={() => {}}
          class="grid place-items-center h-11.5 w-11.5 rounded-full bg-[#fff1] text-blue outline-none focus:bg-blue focus:text-white active:bg-blue active:text-white hover:bg-blue hover:text-white"
          aria-label="Send message"
          title="Send message"
        >
          <div class="i-mdi:send h-6 w-6 ml-1" />
        </button>
        <button
          onclick={() => {}}
          class="grid place-items-center h-11.5 w-11.5 rounded-full bg-[#fff1] text-blue outline-none focus:bg-blue focus:text-white active:bg-blue active:text-white hover:bg-blue hover:text-white"
          aria-label="Record voice message"
          title="Record voice message"
        >
          <div class="i-mdi:microphone-outline h-6 w-6" />
        </button>

        <button
          onclick={() => {}}
          class="grid place-items-center h-11.5 w-11.5 rounded-full bg-[#fff1] text-red outline-none focus:bg-red focus:text-white active:bg-red active:text-white hover:bg-red hover:text-white"
          aria-label="Cancel recording"
          title="Cancel recording"
        >
          <div class="i-mdi:delete-outline h-6 w-6" />
        </button>
      </div>
    </div>
  )
})
