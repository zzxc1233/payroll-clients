import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesignPreview from "./pages/DesignPreview";
import EmployeesPage from "./pages/EmployeesPage";
import { DashboardLayout } from "./components/layouts/DashboardLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <DashboardLayout>
          <Routes>
            <Route path="/" />
            <Route path="/employees" element={<EmployeesPage />} />
            <Route path="/payroll" />
            <Route path="/shift" />
            <Route path="/settings" />
            <Route path="/design-system" element={<DesignPreview />} />
          </Routes>
        </DashboardLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
