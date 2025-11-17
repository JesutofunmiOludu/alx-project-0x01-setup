import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Users Page</h1>
        <p>This is the users page content.</p>
      </main>
    </div>
  );
}

export default Users;