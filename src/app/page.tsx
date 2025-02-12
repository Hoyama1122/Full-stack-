import { getCurrentSession } from "@/actions/auth";
import { getAllProducts } from "@/sanity/lib/client";
import Image from "next/image";

 const Home = async() => {
  const { user } = await getCurrentSession();
  const product = await getAllProducts();
  return (
    <div>
        {JSON.stringify(product)}
    </div>
  );
};

export default Home;