import FormComponent from '../components/FormComponent'

export default function Deploy_wizardPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Deploy Wizard</h1>
        <p className="text-slate-400">Step-by-step deployment wizard</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Deployment Wizard</h1>
          <p className="text-slate-400">Deploy your website with a simple wizard</p>
        </div>
        
      </div>

      <FormComponent key="1" title="Project Deployment" fields={[{"name":"projectName","type":"text","label":"Project Name","required":true,"placeholder":"Enter project name"},{"name":"localPath","type":"text","label":"Local Folder Path","required":true,"placeholder":"Select folder to deploy","helper":"Choose the local folder containing your website files"},{"name":"serverId","type":"select","label":"Target Server","required":true,"options":[],"placeholder":"Select destination server"},{"name":"deploymentDate","type":"date","label":"Deployment Date","required":true},{"name":"deploymentTime","type":"time","label":"Deployment Time","required":true},{"name":"notes","type":"textarea","label":"Deployment Notes","required":false,"placeholder":"Optional notes about this deployment"}]} />

      <div key="2" className="card">
        <p className="text-slate-400">Component: card</p>
      </div>
    </div>
  )
}
