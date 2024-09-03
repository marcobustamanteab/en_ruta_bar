import {Link} from 'react-router-dom';


export function Navigation(){
  return (
    <div>
       <Link to="/clients"><h1>Clients App</h1></Link>
        <Link to="/client-create">Create Task</Link>
    </div>
  );
}
