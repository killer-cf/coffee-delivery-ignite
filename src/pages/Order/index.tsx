import { useLocation } from 'react-router-dom'

export function Order() {
  const {
    state: { data },
  } = useLocation()

  console.log(data)
  return <h1>ORDER</h1>
}
