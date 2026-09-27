import { useEffect, useState } from "react";
import {
  MessageSquareWarning,
  Search,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  Clock,
} from "lucide-react";
import api from "../services/api";

function Complaints() {
  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadComplaints = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/complaints");

      const data =
        response.data.value ??
        response.data.data ??
        response.data;

      setComplaints(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to load complaints:", err);

      setError(
        "Unable to load complaints. Please check the API connection."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComplaints();
  }, []);

  const getStatus = (complaint) =>
    complaint.status || "Open";

  const getFacilityName = (complaint) =>
    complaint.facility?.name ||
    `Facility #${complaint.facility_id ?? "—"}`;

  const filteredComplaints = complaints.filter((complaint) => {
    const facilityName = getFacilityName(complaint);

    const complainant =
      complaint.complainant_name || "";

    const description =
      complaint.description || "";

    const status = getStatus(complaint);

    const searchText =
      `${facilityName} ${complainant} ${description} ${status}`
        .toLowerCase();

    const matchesSearch = searchText.includes(
      search.toLowerCase()
    );

    const normalizedStatus = status.toLowerCase();

    const matchesFilter =
      filter === "All" ||
      (filter === "Open" && normalizedStatus === "open") ||
      (filter === "Resolved" &&
        normalizedStatus === "resolved");

    return matchesSearch && matchesFilter;
  });

  const openCount = complaints.filter(
    (complaint) =>
      getStatus(complaint).toLowerCase() === "open"
  ).length;

  const resolvedCount = complaints.filter(
    (complaint) =>
      getStatus(complaint).toLowerCase() === "resolved"
  ).length;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">FACILITY MANAGEMENT</p>

          <h1>Complaints</h1>

          <p className="subtitle">
            Track facility issues and review reported complaints.
          </p>
        </div>

        <button className="refresh-btn" onClick={loadComplaints}>
          <RefreshCw size={17} />
          Refresh
        </button>
      </div>

      {error && <div className="error-box">{error}</div>}

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon danger">
            <MessageSquareWarning size={21} />
          </div>

          <div>
            <span>Total Complaints</span>
            <strong>
              {loading ? "—" : complaints.length}
            </strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon warning">
            <Clock size={21} />
          </div>

          <div>
            <span>Open</span>
            <strong>
              {loading ? "—" : openCount}
            </strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Resolved</span>
            <strong>
              {loading ? "—" : resolvedCount}
            </strong>
          </div>
        </div>
      </div>

      <div className="search-box">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search complaints..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />
      </div>

      <div className="filter-row">
        {["All", "Open", "Resolved"].map((item) => (
          <button
            key={item}
            className={`filter-btn ${
              filter === item ? "selected" : ""
            }`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="empty-state">
          Loading complaints...
        </div>
      ) : filteredComplaints.length === 0 ? (
        <div className="empty-state">
          <AlertCircle size={32} />

          <h3>No complaints found</h3>

          <p>Try changing your search or filter.</p>
        </div>
      ) : (
        <div className="content-section">
          <div className="section-heading">
            <div>
              <h2>Complaint Records</h2>

              <p>
                {filteredComplaints.length} records found
              </p>
            </div>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Complaint By</th>
                  <th>Facility</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Description</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {filteredComplaints.map((complaint) => {
                  const status = getStatus(complaint);

                  const resolved =
                    status.toLowerCase() === "resolved";

                  return (
                    <tr key={complaint.id}>
                      <td>
                        <strong>
                          {complaint.complainant_name ||
                            "Unknown"}
                        </strong>
                      </td>

                      <td>{getFacilityName(complaint)}</td>

                      <td>{complaint.email || "—"}</td>

                      <td>
                        <span
                          className={`status ${
                            resolved
                              ? "status-good"
                              : "status-warning"
                          }`}
                        >
                          {resolved ? (
                            <CheckCircle2 size={14} />
                          ) : (
                            <Clock size={14} />
                          )}

                          {status}
                        </span>
                      </td>

                      <td>
                        {complaint.description ||
                          "No description available."}
                      </td>

                      <td>
                        {complaint.created_at
                          ? new Date(
                              complaint.created_at
                            ).toLocaleDateString("en-IN")
                          : "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Complaints;