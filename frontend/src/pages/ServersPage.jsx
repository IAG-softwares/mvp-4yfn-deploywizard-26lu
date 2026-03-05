import StatsCard from '../components/StatsCard'
import DataTable from '../components/DataTable'

export default function ServersPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Servers</h1>
        <p className="text-slate-400">Manage SSH server configurations</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Server Management</h1>
          <p className="text-slate-400">Configure and manage your SSH servers</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[{"id":"total_servers","label":"Total Servers","value":0,"icon":"server","color":"blue"}]} />

      <DataTable key="2" columns={[{"key":"serverName","label":"Server Name"},{"key":"hostname","label":"Hostname"},{"key":"port","label":"Port"},{"key":"provider","label":"Provider"},{"key":"actions","label":"Actions"}]} rows={[]} />
    </div>
  )
}
