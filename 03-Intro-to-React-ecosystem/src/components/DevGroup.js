import useUserInfo from "../utils/Hooks/useUserInfo";

// alternate functional component
export default DevGroup = () => {
  const user = useUserInfo("Clement");
  return (
    <div className="dev-container">
      <h2 className="heading">Name: {user.name}</h2>
      <h3>Location: {user.location}</h3>
    </div>
  );
};
