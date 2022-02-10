import { Route, Routes } from 'solid-app-router'
import { Chats } from './Chats'
import { Messages } from './Messages'

export const App = $component(() => {
  return (
    <>
      <Routes>
        <Route path="" element={<Chats />} />
        <Route path=":id" element={<Messages />} />
      </Routes>
    </>
  )
})
