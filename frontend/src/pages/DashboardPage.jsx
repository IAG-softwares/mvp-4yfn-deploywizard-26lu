import StatsCard from '../components/StatsCard'
import DataTable from '../components/DataTable'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-slate-400">Overview of deployment activities and server statistics</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">DeployWizard</h1>
          <p className="text-slate-400">SSH Deployment Dashboard</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[{"id":"total_servers","label":"Total Servers","value":0,"icon":"server","color":"blue"},{"id":"successful_deployments","label":"Successful Deployments","value":0,"icon":"check-circle","color":"green"},{"id":"deployments_this_month","label":"Deployments This Month","value":0,"icon":"calendar","color":"purple"},{"id":"recent_backups","label":"Recent Backups","value":0,"icon":"shield-alt","color":"orange"},{"id":"deployment_success_rate","label":"Success Rate","value":"0%","icon":"chart-line","color":"teal"},{"id":"avg_files_transferred","label":"Avg Files Per Deploy","value":0,"icon":"file-alt","color":"indigo"}]} />

      <div key="2" className="card">
        <p className="text-slate-400">Component: cta</p>
      </div>

      <DataTable key="3" columns={[{"key":"projectName","label":"Project"},{"key":"serverId","label":"Server"},{"key":"status","label":"Status"},{"key":"deploymentDate","label":"Date"}]} rows={[]} />
    </div>
  )
}
