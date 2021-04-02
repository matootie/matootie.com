import Protected from "components/protected"

export default function Feed() {
  return (
    <Protected>
      <h1>This is some protected content.</h1>
    </Protected>
  )
}
