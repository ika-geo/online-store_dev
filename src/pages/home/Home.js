import Banner from "../../components/banner/Banner";
import Categories from "./categories/Categories";
import Promotions from "./promotions/Promotions";
import Adventages from "./adventages/Adventages";




const Home = () => {
    return (
        <>
            <div className="home">
                <Banner/>
                <Categories/>
                <Adventages/>
                <Promotions/>
            </div>
        </>
    );
};

export default Home;