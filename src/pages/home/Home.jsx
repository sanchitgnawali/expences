import { useAuthContext } from "./../../hooks/useAuthContext";

import "./Home.css";
import TransactionForm from "./TransactionForm";

export default function Home() {
  const { user } = useAuthContext();
  return (
    <div className="container">
      <div className="content">transaction list</div>
      <div className="sidebar">
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
