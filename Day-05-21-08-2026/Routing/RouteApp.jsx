import {Routes,Route,Link,Navigate,Outlet,useParams,} from "react-router-dom";
function Home() {
  return <h2>Home Page</h2>;
}
function About() {
  return <h2>About Page</h2>;
}
// Dynamic Route
function Product() {
  const { id } = useParams();
  return <h2>Product ID: {id}</h2>;
}
// Login
function Login() {
  return <h2>Login Page</h2>;
}
// Protected Route
function ProtectedRoute() {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
// Dashboard Layout
function Dashboard(){
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="/dashboard">Home</Link> |{" "}
        <Link to="/dashboard/profile">Profile</Link> |{" "}
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
      <hr></hr>
      {/* Child routes appear here */}
      <Outlet />
    </div>
  );
}
// Nested Dashboard Pages
function DashboardHome() {
  return <h3>Dashboard Home</h3>;
}
function Profile() {
  return <h3>Profile Page</h3>;
}
function Settings() {
  return <h3>Settings Page</h3>;
}
// 404 page
function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}
function RouteApp() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/product/101">Product</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <hr></hr>
      <Routes>
        {/* Normal Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Dynamic Route */}
        <Route path="/product/:id" element={<Product />} />
        {/* Login */}
        <Route path="/login" element={<Login />} />
        {/* Protected + Nested Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RouteApp;