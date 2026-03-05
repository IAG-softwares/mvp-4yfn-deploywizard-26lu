import StatsCard from '../components/StatsCard'
import DataTable from '../components/DataTable'

export default function DeploymentsPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Deployments</h1>
        <p className="text-slate-400">View and manage deployment history</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Deployment History</h1>
          <p className="text-slate-400">Track and manage your website deployments</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[{"id":"successful_deployments","label":"Successful Deployments","value":0,"icon":"check-circle","color":"green"},{"id":"deployments_this_month","label":"This Month","value":0,"icon":"calendar","color":"purple"}]} />

      <DataTable key="2" columns={[{"key":"projectName","label":"Project"},{"key":"serverId","label":"Server"},{"key":"status","label":"Status"},{"key":"filesTransferred","label":"Files"},{"key":"deploymentDate","label":"Date"},{"key":"actions","label":"Actions"}]} rows={[]} />
    </div>
  )
}
