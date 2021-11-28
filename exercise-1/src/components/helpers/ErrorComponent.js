import React from 'react';
import InfoPageLayout from '../layouts/InfoPageLayout'

const ErrorComponent = ({error}) => {
  return(
    <InfoPageLayout>
        <>
          <div className="text-gray-900 font-bold text-4xl mb-12">Error 😢</div>
          <div className="text-gray-900 font-bold text-4xl mb-12">{error}</div>
        </>  
    </InfoPageLayout>
  )
}


export default ErrorComponent
