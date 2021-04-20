import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

function Protected({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}

export default withPageAuthRequired(Protected)
