import { withPageAuthRequired } from '@auth0/nextjs-auth0'

function Protected(props) {
  return (
    <>
      {props.children}
    </>
  )
}

export default withPageAuthRequired(Protected)
