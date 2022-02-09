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
            <>
              <Item onPointerDown={() => navigate('/1')} />
              <Item onPointerDown={() => navigate('/2')} />
            </>
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
    <div class="text-white" style={{ display: 'flex', 'flex-direction': 'column', height: '100%' }}>
      <div class="p-2 gap-2 flex items-center bg-[#fff1]">
        <button
          onclick={() => history.back()}
          class="grid place-items-center h-10 w-10 rounded-full hover:bg-[#fff1]"
          aria-label="Back"
          title="Back"
        >
          <div class="i-mdi:arrow-left h-7 w-7 text-gray-400" />
        </button>
        <button onclick={() => {}} class="rounded-full bg-black w-10 h-10" />
        <button onclick={() => {}} class="flex-1 flex flex-col leading-none">
          <div class="font-bold">Trio</div>
          <div class="text-gray-400 text-sm">last seen recently</div>
        </button>
        <button
          onclick={() => {}}
          class="grid place-items-center h-10 w-10 rounded-full hover:bg-[#fff1]"
          aria-label="More actions"
          title="More actions"
        >
          <div class="i-mdi:dots-vertical h-6 w-6 text-gray-400" />
        </button>
      </div>
      <div class="flex-1 overflow-auto grid gap-1 p-2 pr-1" classList={{ [styles.scroll]: true }}>
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
      <div class="flex p-2 gap-2 border-[#fff2] border-t">
        <button
          onclick={() => {}}
          class="grid place-items-center h-11 w-11 rounded-full text-blue mr--13"
          aria-label="Emoji"
          title="Emoji"
        >
          <div class="i-mdi:emoji-outline h-6 w-6" />
        </button>
        <input class="flex-1 p-2 px-4 pl-10.5 bg-[#fff1] rounded-xl text-gray-200 outline-none" placeholder="Message" />
        <button
          onclick={() => {}}
          class="grid place-items-center h-11 w-11 rounded-full text-blue ml--13"
          aria-label="File"
          title="File"
        >
          <div class="i-mdi:paperclip h-6 w-6 rotate-40" />
        </button>
        <button
          onclick={() => {}}
          class="grid place-items-center h-11 w-11 rounded-full bg-[#fff1] active:bg-blue active:text-white hover:bg-blue hover:text-white text-blue"
          aria-label="Send"
          title="Send"
        >
          <div class="i-mdi:send h-6 w-6 ml-1" />
        </button>
      </div>
    </div>
  )
})

const Item: Component<{ active?: boolean } & JSX.HTMLAttributes<HTMLDivElement>> = $component(({ active, ...rest }) => {
  return (
    <div
      {...rest}
      class="text-white hover:bg-[#fff1]"
      classList={{ active }}
      style={{ display: 'flex', gap: '0.5rem', padding: '0.5rem', cursor: 'pointer' }}
    >
      <div class="h-13 w-13 rounded-full bg-gray" />
      <div style={{ flex: 1, display: 'grid', 'align-items': 'center' }}>
        <div style={{ display: 'flex', 'justify-content': 'space-between' }}>
          <div style={{ 'font-size': '1.125rem', 'font-weight': 600 }}>Trio</div>
          <div style={{ 'font-size': '0.75rem', 'font-variant-numeric': 'tabular-nums' }}>17:16</div>
        </div>
        <div
          style={{
            'font-size': '0.95rem',
            'text-overflow': 'ellipsis',
            'white-space': 'nowrap',
            overflow: 'hidden',
          }}
        >
          I will I willI willI willI willI willI willI willI willI willI willI willI willI willI willI willI will
        </div>
      </div>
    </div>
  )
})
