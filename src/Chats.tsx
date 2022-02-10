import { useNavigate } from 'solid-app-router'
import { Bar } from './Bar'
import { Chat } from './Chat'
import styles from './index.module.css'

export const Chats = $component<{ active?: string }>(({ active }) => {
  const navigate = useNavigate()
  console.log('chats')
  return (
    <div class="grid h-100% bg-[#0002]">
      <Bar />
      <div class={styles.scroll}>
        {Array(100)
          .fill(0)
          .map((_, i) => (
            <Chat active={active === i + ''} onPointerDown={() => navigate(i + '')} />
          ))}
      </div>
      {/* <button
        tabindex={-1}
        onclick={() => {}}
        class="fixed bottom-4 right-4 grid place-items-center h-14 w-14 rounded-full outline-none bg-blue text-white"
        aria-label="Compose"
        title="Compose"
      >
        <div class="i-mdi:pencil h-6 w-6" />
      </button> */}
    </div>
  )
})
