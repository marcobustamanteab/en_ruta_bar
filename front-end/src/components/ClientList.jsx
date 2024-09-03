import {getAllClients} from '../api/clients.api.js'
import { useEffect } from "react"



export function ClientList() {
    useEffect(() => {
        async function fetchClients() {
            const response = await getAllClients();
            console.log(response);
        }
        fetchClients();
        }, []);
  return (
    <div>ClienttttList</div>
  )
}