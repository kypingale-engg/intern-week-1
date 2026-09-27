import { useEffect, useState } from "react";
import {
  Building2,
  ClipboardCheck,
  AlertTriangle,
  MessageSquareWarning,
  RefreshCw,
  Activity,
} from "lucide-react";
import api from "../services/api";

function Dashboard() {
  const [facilities, setFacilities] = useState([]);
  const [inspections, setInspections] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadDashboard = async () => {
    try {
      setLoading(true);
      setError("");

      const [facilityRes, inspectionRes, complaintRes] =
        await Promise.all([
          api.get("/facilities"),
          api.get("/inspections"),
          api.get("/complaints"),
        ]);

      const facilityData =
        facilityRes.data.value ??
        facilityRes.data.data ??
        facilityRes.data;

      const inspectionData =
        inspectionRes.data.value ??
        inspectionRes.data.data ??
        inspectionRes.data;

      const complaintData =
        complaintRes.data.value ??
        complaintRes.data.data ??
        complaintRes.data;

      setFacilities(Array.isArray(facilityData) ? facilityData : []);
      setInspections(
        Array.isArray(inspectionData) ? inspectionData : []
      );
      setComplaints(
        Array.isArray(complaintData) ? complaintData : []
      );
    } catch (err) {
      console.error("Failed to load dashboard:", err);

      setError(
        "Unable to connect to the facility management API. Make sure Laravel is running."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const passedInspections = inspections.filter(
    (item) => item.status?.toLowerCase() === "passed"
  ).length;

  const repairRequired = inspections.filter(
    (item) => item.status?.toLowerCase() === "needs repair"
  ).length;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">SMART FACILITY MANAGEMENT</p>

          <h1>Facility Dashboard</h1>

          <p className="subtitle">
            Monitor facilities, inspections and complaints from one place.
          </p>
        </div>

        <button className="refresh-btn" onClick={loadDashboard}>
          <RefreshCw size={17} />
          Refresh
        </button>
      </div>

      {error && <div className="error-box">{error}</div>}

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Building2 size={22} />
          </div>

          <div>
            <span>Total Facilities</span>
            <strong>{loading ? "—" : facilities.length}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <ClipboardCheck size={22} />
          </div>

          <div>
            <span>Total Inspections</span>
            <strong>{loading ? "—" : inspections.length}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Activity size={22} />
          </div>

          <div>
            <span>Passed Inspections</span>
            <strong>{loading ? "—" : passedInspections}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon warning">
            <AlertTriangle size={22} />
          </div>

          <div>
            <span>Needs Repair</span>
            <strong>{loading ? "—" : repairRequired}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon danger">
            <MessageSquareWarning size={22} />
          </div>

          <div>
            <span>Complaints</span>
            <strong>{loading ? "—" : complaints.length}</strong>
          </div>
        </div>
      </div>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <h2>Facilities</h2>

            <p>Current facility information from the API.</p>
          </div>
        </div>

        {loading ? (
          <div className="empty-state">
            Loading facilities...
          </div>
        ) : facilities.length === 0 ? (
          <div className="empty-state">
            No facilities found.
          </div>
        ) : (
          <div className="facility-grid">
            {facilities.map((facility) => {
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

                  <div className="facility-footer">
                    <span>
                      Availability:{" "}
                      <b>
                        {isAvailable
                          ? "Available"
                          : "Unavailable"}
                      </b>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <h2>Recent Inspections</h2>

            <p>Latest inspection records.</p>
          </div>
        </div>

        {loading ? (
          <div className="empty-state">
            Loading inspections...
          </div>
        ) : inspections.length === 0 ? (
          <div className="empty-state">
            No inspection records found.
          </div>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Facility</th>
                  <th>Inspector</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {inspections.slice(0, 5).map((inspection) => {
                  const passed =
                    inspection.status?.toLowerCase() ===
                    "passed";

                  return (
                    <tr key={inspection.id}>
                      <td>
                        {inspection.facility?.name ||
                          `Facility #${
                            inspection.facility_id ?? "—"
                          }`}
                      </td>

                      <td>
                        {inspection.employee?.name ||
                          inspection.inspector_name ||
                          inspection.inspector ||
                          "—"}
                      </td>

                      <td>
                        {inspection.inspection_date
                          ? new Date(
                              inspection.inspection_date
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
                            <Activity size={14} />
                          ) : (
                            <AlertTriangle size={14} />
                          )}

                          {inspection.status || "Unknown"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

export default Dashboard;