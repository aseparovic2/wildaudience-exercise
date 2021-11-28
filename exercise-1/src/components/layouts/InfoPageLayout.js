import React from 'react';

const InfoPageLayout = ({children}) => {
  return(
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover p12" style={{backgroundImage: "url('https://source.unsplash.com/1L71sPT5XKc')"}}>
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        {children}
      </div>
    </div>
  )
}

export default InfoPageLayout
