import { SignIn } from "@/features/sign-in";
import ProtectedRoute from "@/hooks/useProtectedRoute";
import VerificationDashboard from "@/Verification";
import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
  {
    index: true,
    element: (
      <ProtectedRoute>
        <VerificationDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "auth",
    element: <SignIn />,
  },
]);

export default routes;
