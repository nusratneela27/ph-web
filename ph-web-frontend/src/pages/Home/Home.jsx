import Container from "../../components/Shared/Container";
import Banner from "./Banner/Banner";
import Developer from "./Developer";
import SuccessStories from "./SuccessStories";

const Home = () => {
  return (
    <Container>
      <Banner></Banner>
      <SuccessStories></SuccessStories>
      <Developer></Developer>
    </Container>
  );
};

export default Home;
