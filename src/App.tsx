import styles from './App.module.css'
import { JSX } from 'solid-js'
import { Route, Routes, useNavigate, useParams } from 'solid-app-router'
const App = () => {
  const navigate = useNavigate()

  return (
    <>
      <Routes>
        <Route
          path=""
          element={() => (
            <div class="grid grid-rows-[auto_1fr] h-100%">
              <Bar />
              <div class={styles.scroll}>
                {Array(10)
                  .fill(0)
                  .map(() => (
                    <Item onPointerDown={() => navigate('/1')} />
                  ))}
              </div>
            </div>
          )}
        />
        <Route path=":id" component={Messages} />
      </Routes>
    </>
  )
}
export default App

const Messages = $component(() => {
  const params = useParams<{ id: string }>()
  return (
    <div class="text-gray-400 grid grid-rows-[auto_1fr_auto] h-100%">
      <div class="grid gap-2 grid-cols-[auto_auto_1fr_auto] items-center p-2  bg-[#fff1]">
        <button
          onclick={() => history.back()}
          class="grid place-items-center h-10 w-10 rounded-full hover:bg-[#fff1]"
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
          class="grid place-items-center h-10 w-10 rounded-full hover:bg-[#fff1]"
          aria-label="More actions"
          title="More actions"
        >
          <div class="i-mdi:dots-vertical h-6 w-6" />
        </button>
      </div>
      <div class={`grid gap-1 p-2 pr-1 text-white ${styles.scroll}`}>
        <div class="bg-blue px-3 py-1.25 rounded-l-2xl rounded-r-md justify-self-end">1990909302j fjlafjsd</div>
        <div class="bg-blue px-3 py-1.25 rounded-l-2xl rounded-r-md justify-self-end">1990909302j fjlafjsd</div>
        <div class="bg-blue px-3 py-1.25 rounded-r-2xl rounded-l-md justify-self-start">jfjasjf;slkfj fs a9f 2</div>
        <div class="bg-blue px-3 py-1.25 rounded-l-2xl rounded-r-md justify-self-end">1990909302j fjlafjsd</div>
        <div class="bg-blue px-3 py-1.25 rounded-r-2xl rounded-l-md justify-self-start">jfjasjf;slkfj fs a9f 2</div>
        <div class="bg-blue px-3 py-1.25 rounded-l-2xl rounded-r-md justify-self-end">1990909302j fjlafjsd</div>
        <div class="bg-blue px-3 py-1.25 rounded-r-2xl rounded-l-md justify-self-start">jfjasjf;slkfj fs a9f 2</div>
        <div class="bg-blue px-3 py-1.25 rounded-l-2xl rounded-r-md justify-self-end">1990909302j fjlafjsd</div>
        <div class="bg-blue px-3 py-1.25 rounded-r-2xl rounded-l-md justify-self-start">jfjasjf;slkfj fs a9f 2</div>
        <div class="bg-blue px-3 py-1.25 rounded-l-2xl rounded-r-md justify-self-end">1990909302j fjlafjsd</div>
        <div class="bg-blue px-3 py-1.25 rounded-r-2xl rounded-l-md justify-self-start">jfjasjf;slkfj fs a9f 2</div>
        <div class="bg-blue px-3 py-1.25 rounded-l-2xl rounded-r-md justify-self-end">1990909302j fjlafjsd</div>
        <div class="bg-blue px-3 py-1.25 rounded-r-2xl rounded-l-md justify-self-start">jfjasjf;slkfj fs a9f 2</div>
        <div class="bg-blue px-3 py-1.25 rounded-l-2xl rounded-r-md justify-self-end">1990909302j fjlafjsd</div>
        <div class="bg-blue px-3 py-1.25 rounded-r-2xl rounded-l-md justify-self-start">jfjasjf;slkfj fs a9f 2</div>
        <div class="bg-blue px-3 py-1.25 rounded-l-2xl rounded-r-md justify-self-end">1990909302j fjlafjsd</div>
        <div class="bg-blue px-3 py-1.25 rounded-r-2xl rounded-l-md justify-self-start">jfjasjf;slkfj fs a9f 2</div>
        <div class="bg-blue px-3 py-1.25 rounded-l-2xl rounded-r-md justify-self-end">1990909302j fjlafjsd</div>
        <div class="bg-blue px-3 py-1.25 rounded-r-2xl rounded-l-md justify-self-start">jfjasjf;slkfj fs a9f 2</div>
        <div class="bg-blue px-3 py-1.25 rounded-l-2xl rounded-r-md justify-self-end">1990909302j fjlafjsd</div>
        <div class="bg-blue px-3 py-1.25 rounded-r-2xl rounded-l-md justify-self-start">jfjasjf;slkfj fs a9f 2</div>
        <div class="bg-blue px-3 py-1.25 rounded-l-2xl rounded-r-md justify-self-end">1990909302j fjlafjsd</div>
        <div class="bg-blue px-3 py-1.25 rounded-r-2xl rounded-l-md justify-self-start">jfjasjf;slkfj fs a9f 2</div>
      </div>
      <div class="grid grid-cols-[1fr_auto_auto] p-2 gap-2 border-[#fff1] border-t">
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
          class="grid place-items-center h-11.5 w-11.5 rounded-full bg-[#fff1] active:bg-blue active:text-white hover:bg-blue hover:text-white text-blue"
          aria-label="Send"
          title="Send"
        >
          <div class="i-mdi:send h-6 w-6 ml-1" />
        </button>
        <button
          onclick={() => {}}
          class="grid place-items-center h-11.5 w-11.5 rounded-full bg-[#fff1] active:bg-blue active:text-white hover:bg-blue hover:text-white text-blue"
          aria-label="record"
          title="record"
        >
          <div class="i-mdi:microphone-outline h-6 w-6" />
        </button>
      </div>
    </div>
  )
})

const Item: Component<{ active?: boolean } & JSX.HTMLAttributes<HTMLDivElement>> = $component(({ active, ...rest }) => {
  return (
    <div
      {...rest}
      class="hover:bg-[#fff1] text-white grid grid-cols-[auto_1fr] gap-2 p-2 cursor-pointer"
      classList={{ active }}
    >
      <div class="h-13 w-13 rounded-full bg-gray-900" />
      <div class="grid align-items-center">
        <div class="grid grid-cols-[1fr_auto]">
          <div class="font-bold text-lg">Trio</div>
          <div class="text-xs">17:16</div>
        </div>
        <div class="text-sm overflow-hidden" style={{ 'text-overflow': 'ellipsis', 'white-space': 'nowrap' }}>
          I will I willI willI willI willI willI willI willI willI willI willI willI willI willI willI willI will
        </div>
      </div>
    </div>
  )
})

const Bar = () => (
  <div class="grid gap-2 grid-cols-[auto_1fr] items-center p-2 bg-[#fff1] text-gray-400">
    <button
      onclick={() => {}}
      class="grid place-items-center h-10 w-10 rounded-full hover:bg-[#fff1]"
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
      <div class="absolute top-0 right-0 w-10 h-10 grid place-items-center hover:bg-[#fff1] rounded-full cursor-pointer">
        <div class="i-mdi:close h-5 w-5" />
      </div>
    </div>
  </div>
)
