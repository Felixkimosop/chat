import React from 'react'

function Message({ message}) {
  return (
    <div>
        <div className='flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full'>
          <p className='fixed mt-[-4rem] text-gray-700 text-xs'>Dave</p>  
          <p>{message.text}</p>
        </div>
    </div>
  )
}

export default Message