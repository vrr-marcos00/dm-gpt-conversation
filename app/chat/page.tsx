import type { FC } from 'react'
import React from 'react'

import type { IMainProps } from './components'
import Main from './components'

const App: FC<IMainProps> = ({
  params,
}: any) => {
  return (
    <Main params={params} />
  )
}

export default React.memo(App)
