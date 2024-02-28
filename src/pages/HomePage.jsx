import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import route from "./../routes/route.json";
const HomePage = () => {
  const navigate = useNavigate();

  const createUserBtnHandler = () => {
    navigate(route.USERS_FORM);
  };

  const allUsersBtnHandler = () => {
    navigate(route.USERS_FROM_DB);
  };
  return (
    <>
      <h3>HomePage</h3>
      <Button variant="contained" onClick={createUserBtnHandler}>
        Create User
      </Button>
      <Button variant="contained" color="success" onClick={allUsersBtnHandler}>
        All Users
      </Button>
    </>
  );
};

export default HomePage;
