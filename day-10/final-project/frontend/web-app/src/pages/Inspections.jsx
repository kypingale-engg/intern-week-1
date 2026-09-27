import { useEffect, useState } from "react";
import {
  ClipboardCheck,
  Search,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import api from "../services/api";

function Inspections() {
  const [inspections, setInspections] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadInspections = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/inspections");

      const data =
        response.data.value ??
        response.data.data ??
        response.data;

      setInspections(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to load inspections:", err);
      setError(
        "Unable to load inspections. Please check the API connection."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInspections();
  }, []);

  const getStatus = (inspection) =>
    inspection.status || inspection.result || "Unknown";

  const getFacilityName = (inspection) =>
    inspection.facility?.name ||
    inspection.facility_name ||
    `Facility #${inspection.facility_id ?? "—"}`;

  const getInspectorName = (inspection) =>
    inspection.employee?.name ||
    inspection.inspector_name ||
    inspection.inspector ||
    "—";

  const filteredInspections = inspections.filter((inspection) => {
    const facilityName = getFacilityName(inspection);
    const inspectorName = getInspectorName(inspection);
    const status = getStatus(inspection);

    const matchesSearch =
      `${facilityName} ${inspectorName} ${status}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const normalizedStatus = status.toLowerCase();

    const matchesFilter =
      filter === "All" ||
      (filter === "Passed" && normalizedStatus === "passed") ||
      (filter === "Needs Repair" &&
        normalizedStatus === "needs repair");

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">FACILITY MANAGEMENT</p>

          <h1>Inspections</h1>

          <p className="subtitle">
            Review inspection records and monitor facility conditions.
          </p>
        </div>

        <button className="refresh-btn" onClick={loadInspections}>
          <RefreshCw size={17} />
          Refresh
        </button>
      </div>

      <div className="search-box">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search facility, inspector or status..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="filter-row">
        {["All", "Passed", "Needs Repair"].map((item) => (
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

      {error && <div className="error-box">{error}</div>}

      {loading ? (
        <div className="empty-state">
          Loading inspection records...
        </div>
      ) : filteredInspections.length === 0 ? (
        <div className="empty-state">
          <ClipboardCheck size={32} />

          <h3>No inspections found</h3>

          <p>Try changing your search or filter.</p>
        </div>
      ) : (
        <div className="content-section">
          <div className="section-heading">
            <div>
              <h2>Inspection Records</h2>

              <p>
                {filteredInspections.length} records found
              </p>
            </div>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Facility</th>
                  <th>Inspector</th>
                  <th>Inspection Date</th>
                  <th>Status</th>
                  <th>Remarks</th>
                </tr>
              </thead>

              <tbody>
                {filteredInspections.map((inspection) => {
                  const status = getStatus(inspection);

                  const passed =
                    status.toLowerCase() === "passed";

                  return (
                    <tr key={inspection.id}>
                      <td>
                        <strong>
                          {getFacilityName(inspection)}
                        </strong>
                      </td>

                      <td>{getInspectorName(inspection)}</td>

                      <td>
                        {inspection.inspection_date
                          ? new Date(
                              inspection.inspection_date
                            ).toLocaleDateString("en-IN")
                          : inspection.date
                            ? new Date(
                                inspection.date
                              ).toLocaleDateString("en-IN")
                            : "—"}
                      </td>

                      <td>
                        <span
                          className={`status ${
                            passed
                              ? "status-good"
                              : "status-warning"
                          }`}
                        >
                          {passed ? (
                            <CheckCircle2 size={14} />
                          ) : (
                            <AlertTriangle size={14} />
                          )}

                          {status}
                        </span>
                      </td>

                      <td>
                        {inspection.remarks ||
                          inspection.notes ||
                          "No remarks"}
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

export default Inspections;