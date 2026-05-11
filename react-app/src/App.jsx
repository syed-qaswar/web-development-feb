import './App.css'
import Card from './components/Card'


const teams =[
  {title: 'Ahmed', role: 'Web Developer', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
  {title: 'Faizan', role: 'SEO Expert', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
  {title: 'Zain', role: 'Cloud Engineer', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
]

function App(){
  return(
    <>
      <h1>Welcome to our new react project</h1>
      <div className='flex gap-1'>
        <h1>Teams</h1>
        {teams.map((team) => (
          <Card title={team.title} role={team.role} detail={team.detail} />
        ))}
      </div>
      <div>
        <h1>Courses</h1>

      </div>
    </>
  )
}

export default App

