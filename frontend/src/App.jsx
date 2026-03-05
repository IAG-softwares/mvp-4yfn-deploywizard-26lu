import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import DashboardPage from './pages/DashboardPage'
import ServersPage from './pages/ServersPage'
import DeploymentsPage from './pages/DeploymentsPage'
import Deploy_wizardPage from './pages/Deploy_wizardPage'

function App() {
  return (
    <Layout>
      <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/servers" element={<ServersPage />} />
          <Route path="/deployments" element={<DeploymentsPage />} />
          <Route path="/deploy" element={<Deploy_wizardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
