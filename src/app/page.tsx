import { getCurrentSession } from "@/actions/auth";
import Image from "next/image";

 const Home = () => {
  const { user } =getCurrentSession();
  return (
    <div>
        {JSON.stringify(user)}
    </div>
  );
};

export default Home;