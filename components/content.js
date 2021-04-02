import Navigation from "components/navigation"

export default function Content(props) {
  return (
    <div>
      <Navigation />
      <div className="py-20">
        {props.children}
      </div>
    </div>
  )
}