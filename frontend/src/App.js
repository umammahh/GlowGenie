import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 flex flex-col">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
