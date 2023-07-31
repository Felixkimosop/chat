import { onSnapshot, query,orderBy,collection} from 'firebase/firestore'
import {db} from '../firebase'
import React, {useState, useEffect, useRef} from 'react'
import Message from './Message'
import Sendmessage from './Sendmessage'

function Chat() {
    const scroll = useRef()

    const [messages, setMessages] = useState([])

    useEffect(() =>{
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot)=>{
            let messages = []
            querySnapshot.forEach((doc)=>{
                messages.push({...doc.data(),id: doc.id})
            })
            setMessages(messages)
        })
        return ()=> unsubscribe()
    },[])
  return (
    <>
   <main className='flex flex-col p-[10px] relative'>
    {messages && messages.map((message,index)=>(
        <Message id={index} message={message} />
    ))}

   </main>
   <Sendmessage />

   <span ref={scroll}></span>
   </>
  )
}

export default Chat