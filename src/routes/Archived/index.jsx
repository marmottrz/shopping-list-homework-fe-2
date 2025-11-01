import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../app/storage.js";
import "../../app/styles.css";

export default function ArchivedPage() {
  const [lists, setLists] = useState([]);
  const navigate = useNavigate();
  const currentUserId = db.getData().currentUserId;

  useEffect(() => {
    setLists(db.getArchived());
  }, []);

  function handleRestore(id) {
    db.restoreList(id);
    setLists(db.getArchived());
  }

  function handleDelete(id) {
    if (confirm("Delete this list permanently?")) {
      db.deleteList(id);
      setLists(db.getArchived());
    }
  }

  return (
    <div>
      <div className="pill">🛒 Archived shopping lists</div>

      <div className="card-list">
        {lists.length === 0 && <div className="empty">No archived lists.</div>}

        {lists.map((list) => (
          <div key={list.id} className="card">
            <div>
              <div><strong>{list.name}</strong></div>
              <div className="meta">
                Owner: {db.getData().users.find(u => u.id === list.ownerId)?.name || "Unknown"}
              </div>
            </div>

            {list.ownerId === currentUserId && (
              <div className="actions">
                <button className="btn ghost" onClick={() => handleRestore(list.id)}>Restore</button>
                <button className="btn dark" onClick={() => handleDelete(list.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: "25px" }}>
        <button
          className="btn dark back-btn"
          onClick={() => navigate("/lists")}
        >
          ⬅ Back to active lists
        </button>
      </div>
    </div>
  );
}
