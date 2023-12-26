import React from 'react'
import ChatRoom from '../../../components/Chat/ChatRoom'
import ManagerSideBar from '../../../layouts/components/ManagerSideBar'

export const ManagerChat = () => {
  return (
    <div>
      <span className="flex">
        <ManagerSideBar className="flex-1" />
        <div className="flex flex-col w-full m-5">
          <h1 className="font-medium text-3xl mt-16 ml-10">Dashboard</h1>
          <ChatRoom />

        </div>
      </span>
    </div>
  )
}
