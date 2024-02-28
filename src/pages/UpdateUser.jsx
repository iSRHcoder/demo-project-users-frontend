import { useParams } from "react-router-dom";
import EditUser from "../components/EditUser/EditUser";

const UpdateUser = () => {
  const { uId } = useParams();

  return (
    <>
      <h4>EditUsser</h4>
      <EditUser uId={uId} />
    </>
  );
};

export default UpdateUser;
