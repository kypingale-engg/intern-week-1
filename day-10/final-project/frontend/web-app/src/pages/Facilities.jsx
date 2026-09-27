import { useEffect, useState } from "react";
import {
  Building2,
  Search,
  RefreshCw,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import api from "../services/api";

function Facilities() {
  const [facilities, setFacilities] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadFacilities = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/facilities");

      const data =
        response.data.value ??
        response.data.data ??
        response.data;

      setFacilities(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to load facilities:", err);

      setError(
        "Unable to load facilities. Please check the API connection."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFacilities();
  }, []);

  const filteredFacilities = facilities.filter((facility) =>
    `${facility.name || ""} ${facility.description || ""} ${
      facility.condition || ""
    } ${facility.is_available ? "available" : "unavailable"}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">FACILITY MANAGEMENT</p>

          <h1>Facilities</h1>

          <p className="subtitle">
            View and monitor all registered facilities.
          </p>
        </div>

        <button
          className="refresh-btn"
          onClick={loadFacilities}
        >
          <RefreshCw size={17} />
          Refresh
        </button>
      </div>

      <div className="search-box">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search facilities..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />
      </div>

      {error && (
        <div className="error-box">
          {error}
        </div>
      )}

      {loading ? (
        <div className="empty-state">
          Loading facilities...
        </div>
      ) : filteredFacilities.length === 0 ? (
        <div className="empty-state">
          <Building2 size={32} />

          <h3>No matching facilities found</h3>

          <p>Try changing your search.</p>
        </div>
      ) : (
        <div className="facility-grid">
          {filteredFacilities.map((facility) => {
            const isAvailable = Boolean(
              facility.is_available
            );

            const isGoodCondition =
              facility.condition?.toLowerCase() === "good";

            return (
              <div
                className="facility-card"
                key={facility.id}
              >
                <div className="facility-top">
                  <div className="facility-icon">
                    <Building2 size={21} />
                  </div>

                  <span
                    className={`status ${
                      isGoodCondition
                        ? "status-good"
                        : "status-warning"
                    }`}
                  >
                    {facility.condition || "Unknown"}
                  </span>
                </div>

                <h3>{facility.name}</h3>

                <p>
                  {facility.description ||
                    "No description available."}
                </p>

                <div className="facility-availability">
                  {isAvailable ? (
                    <span className="status status-good">
                      <CheckCircle2 size={14} />
                      Available
                    </span>
                  ) : (
                    <span className="status status-warning">
                      <XCircle size={14} />
                      Unavailable
                    </span>
                  )}
                </div>

                <div className="facility-footer">
                  Facility ID: <b>#{facility.id}</b>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Facilities;