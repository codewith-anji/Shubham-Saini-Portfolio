import React from 'react'

function ComponentHead({HeadContent,ParaContent}) {
  return (
    <div>
 <div className='flex flex-col items-center gap-2  '>
  <p className='text-4xl font-bold bg-linear-to-tl from-white via-purple-200 to-pink-400 bg-clip-text text-transparent'>{HeadContent}</p>
  <p className='text-lg font-light text-center text-blue-300 '>{ParaContent}</p>
</div>
    </div>
  )
}
export default ComponentHead