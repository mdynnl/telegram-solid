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
    <div style={{ display: 'flex', 'flex-direction': 'column', height: '100%' }}>
      <div>
        <div>Back</div>
      </div>
      <div
        class={styles.scroll}
        style={{
          flex: 1,
          overflow: 'auto',
          padding: '0.5rem',
          'padding-right': '0.25rem',
          display: 'grid',
          gap: '0.5rem',
          background: '#0002',
        }}
      >
        <div class={`${styles.message} ${styles.right}`}>1</div>
        <div class={`${styles.message} ${styles.left}`}>2</div>
        <div class={`${styles.message} ${styles.right}`}>1</div>
        <div class={`${styles.message} ${styles.left}`}>2</div>
        <div class={`${styles.message} ${styles.right}`}>1</div>
        <div class={`${styles.message} ${styles.left}`}>2</div>
        <div class={`${styles.message} ${styles.right}`}>1</div>
        <div class={`${styles.message} ${styles.left}`}>2</div>
        <div class={`${styles.message} ${styles.right}`}>1</div>
        <div class={`${styles.message} ${styles.left}`}>2</div>
        <div class={`${styles.message} ${styles.right}`}>1</div>
        <div class={`${styles.message} ${styles.left}`}>2</div>
        <div class={`${styles.message} ${styles.right}`}>1</div>
        <div class={`${styles.message} ${styles.left}`}>2</div>
        <div class={`${styles.message} ${styles.right}`}>1</div>
        <div class={`${styles.message} ${styles.left}`}>2</div>
        <div class={`${styles.message} ${styles.right}`}>1</div>
        <div class={`${styles.message} ${styles.left}`}>2</div>
        <div class={`${styles.message} ${styles.right}`}>1</div>
        <div class={`${styles.message} ${styles.left}`}>2</div>
        <div class={`${styles.message} ${styles.right}`}>1</div>
        <div class={`${styles.message} ${styles.left}`}>2</div>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', padding: '0.5rem' }}>
        <input style={{ flex: 1, padding: '0.5rem' }} />
        <button>send</button>
      </div>
    </div>
  )
})

const Item: Component<{ active?: boolean } & JSX.HTMLAttributes<HTMLDivElement>> = $component(({ active, ...rest }) => {
  return (
    <div
      {...rest}
      class={styles.item}
      classList={{ [styles.active]: active }}
      style={{ display: 'flex', gap: '0.5rem', padding: '0.5rem', cursor: 'pointer' }}
    >
      <div style={{ background: '#000', width: '50px', height: '50px', 'border-radius': '100%' }}></div>
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
