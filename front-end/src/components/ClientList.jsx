import {getAllClients} from '../api/clients.api.js'
import { useEffect, useState } from "react"




export function ClientList() {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        async function fetchClients() {
            const response = await getAllClients();
            setClients(response.data);
        }
        fetchClients();
        }, []);
  return (
    <div>
        <h1>Clients</h1>
        <ul>
            {clients.map(client => (
                <li key={client.id}>{client.name}</li>
            ))}
        </ul>
    </div>
  )
}