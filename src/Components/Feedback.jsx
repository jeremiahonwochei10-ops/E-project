import React from 'react'

const Feedback = () => {
  return (
    <main className='justify-center items-center'>
        <p className='text-red-500 font-semibold'>We'd Love To Hear From You</p>
        <h1 className='text-amber-900 font-bold w-[40]'>Feedback & Rating</h1>

        <div>
            <h2 className='text-amber-900 font-bold'>Leave a Review</h2>
            <input type="text" placeholder='Your Name' />
            <input type="text" placeholder='Your Comment...,' />

            <button className=' rounded-2xl text-white bg-red-700'>Submit Review</button>
        </div>
    </main>
  )
}

export default Feedback