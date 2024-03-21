import { useQuery } from "@tanstack/react-query";
import Main from "components/templates/Main";
import SideBar from "components/templates/SideBar";
import { getAllPost } from "services/user";
import Loader from "components/modules/Loader";
import { getCategory } from "services/admin";

const style = { display: "flex" };

function HomePage() {
  const { data: posts, isLoading:postLoading } = useQuery(["post-list"], getAllPost);
  const { data: categories,isLoading:categoryLoading } = useQuery(["get-categories"], getCategory);

  return (
    <>
      {postLoading || categoryLoading ? (
        <Loader />
      ) : (
        <div style={style}>
          <SideBar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
