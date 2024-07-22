import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ paddingBottom: "30px" }}>
      <h1>404</h1>
      <h3>Page not found</h3>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default NoPage;
