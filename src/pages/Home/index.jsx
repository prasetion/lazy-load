import { useState, lazy, Suspense } from "react";
import Dialog from "../../components/Dialog";
import "./style.css";

const LazyDialog = lazy(() => import("../../components/Dialog"));

const Home = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = (e) => {
    setDialogOpen(true);
  };

  const closeDialog = (e) => {
    setDialogOpen(false);
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={openDialog}>Open Dialog</button>
      <Suspense fallback={<div>Loading Dialog...</div>}>
        <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
          <h2>Hello, World!</h2>
          <p>Welcome to the dialog component.</p>
        </Dialog>
      </Suspense>
    </div>
  );
};

export default Home;
