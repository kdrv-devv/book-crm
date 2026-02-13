
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import ProviderConfig from './tools/provider'

createRoot(document.getElementById('root')!).render(
  <ProviderConfig>
    <RouterProvider router={routes} />
  </ProviderConfig>
)
