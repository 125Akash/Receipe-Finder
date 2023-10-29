import Recipe from "./Recipe";
import FryingPan from "./FryingPan";
import Loader from "./Loader";
const Home = ({ recipes, loading, error }) => {
  return (
    <div className="home container mx-auto py-8 flex flex-wrap gap-10 justify-center">
      {!loading && !error && recipes.length === 0 ? (
        <div>
          <p className="text-2xl lg:text-4xl font-semibold text-pink-700">
            Nothing to show, please search something!
          </p>
          <FryingPan />
        </div>
      ) : null}

      {loading && <p className="text-2xl">{error ? error : <Loader/>}</p>}

      {recipes?.length > 0 &&
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
  );
};

export default Home;
