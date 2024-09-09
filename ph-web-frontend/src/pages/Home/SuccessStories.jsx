import img from "../../assets/SuccessStories/img1.jpg";
import CountUp from "react-countup";

const SuccessStories = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between my-20 md:mx-40 bg-slate-200 rounded-2xl shadow-sm px-10 py-20 text-center items-center">
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <img
          src={img}
          alt="success"
          className="rounded-2xl w-full h-auto md:block hidden"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-mono font-semibold mb-8">
          Our Success Stories
        </h1>
        <p className="mb-8 md:px-4 text-justify">
          Our community is growing stronger every day, with countless
          individuals sharing their transformative journeys. From learning new
          culinary skills to adopting healthier eating habits, these stories are
          a testament to the impact our platform has had. We celebrate each
          member's unique achievements and are inspired by their dedication and
          creativity. These success stories not only highlight personal
          milestones but also motivate others to embark on their own paths to
          wellness and culinary excellence. Join us in celebrating these
          incredible accomplishments and be inspired to create your own success
          story.
        </p>
        <div className="flex flex-col md:flex-row gap-7">
          <div className="bg-orange-50 rounded-2xl shadow-sm px-8 py-5">
            <h2 className="text-xl italic">Total Recipes</h2>
            <CountUp end={200} duration={20} className="font-bold text-2xl" />
          </div>
          <div className="bg-orange-50 rounded-2xl shadow-sm px-8 py-5">
            <h2 className="text-xl italic">Total Users</h2>
            <CountUp end={150} duration={20} className="font-bold text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
