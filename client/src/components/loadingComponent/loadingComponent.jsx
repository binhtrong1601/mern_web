import React from 'react'
import { Spinner } from 'reactstrap'

const LoadingComponent = ({children}) => {
  return (
    <Spinner style={{marginRight: "15px"}}>
        {children}
    </Spinner>
  )
}

export default LoadingComponent