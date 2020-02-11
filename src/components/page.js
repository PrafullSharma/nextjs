import { useSelector } from 'react-redux'

import Link from '../theme/Link'
import Counter from './counter'
import Clock from './clock'

export default ({linkTo, NavigateTo, title}) => {
  const error = useSelector(state => state.userData.error)
  const placeholderData = useSelector(state => state.userData.placeholderData)
  const lastUpdate = useSelector(state => state.clock.lastUpdate)
  const light = useSelector(state => state.clock.light)

  return (
    <div>
      <h1>{title}</h1>
      <p>coming from env: {process.env.TEST_VAR}</p>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href={linkTo} color="primary" variant="inherit">
          Navigate: {NavigateTo}
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  )
}
