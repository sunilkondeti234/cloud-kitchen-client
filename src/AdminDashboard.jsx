<Route
  path="/admin-dashboard"
  element={
    localStorage.getItem('isAdmin') === 'true'
      ? <AdminDashboard />
      : <Navigate to="/admin-login" />
  }
/>
