import ClientsTable from "./components/ClientsTable";

const fetchClients = async () => {
  const res = await fetch("http://localhost:3000/api/clients"); // Adjust API URL if necessary
  if (!res.ok) throw new Error("Failed to fetch clients");
  return res.json();
};

export default async function ClientsPage() {
  const clients = await fetchClients();

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Clients</h1>
      <ClientsTable clients={clients} />
    </div>
  );
}
