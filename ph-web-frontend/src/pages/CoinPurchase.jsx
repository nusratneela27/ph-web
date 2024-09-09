import { Card } from "flowbite-react";
import Container from "../components/Shared/Container";

const plans = [
  {
    title: "Starter Plan",
    price: 1,
    coins: 100,
    features: ["Access to 50 recipes", "Basic cooking tips"],
  },
  {
    title: "Basic Plan",
    price: 5,
    coins: 500,
    features: [
      "Access to 300 recipes",
      "Basic cooking tips",
      "Ad-free experience",
    ],
  },
  {
    title: "Pro Plan",
    price: 10,
    coins: 1000,
    features: [
      "Access to 1000 recipes",
      "Advanced cooking tips",
      "Ad-free experience",
      "Exclusive recipes",
    ],
  },
];

const CoinPurchase = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 justify-items-center my-20 md:mx-40">
        {plans.map((plan, index) => (
          <Card key={index} className="max-w-sm relative pb-20">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              {plan.title}
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">
                {plan.price}
              </span>
              <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                for {plan.coins} Coins
              </span>
            </div>
            <ul className="my-7 space-y-5">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-lime-600 dark:text-lime-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-800">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-lime-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900"
              >
                Choose plan
              </button>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default CoinPurchase;
