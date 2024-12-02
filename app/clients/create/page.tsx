export default function CreateClientPage() {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Create a New Client</h1>
      <form>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
