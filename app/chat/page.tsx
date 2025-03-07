import type { FC } from 'react'
import React, { Suspense } from 'react'

import type { IMainProps } from './components'
import Main from './components'

const App: FC<IMainProps> = ({
  params,
}: any) => {
  return (
    <Suspense>
      <Main params={params} />
    </Suspense>
  )
}

export default React.memo(App)
