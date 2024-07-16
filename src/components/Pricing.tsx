const Pricing = () => {
  return (
    <div className="flex flex-col justify-center mb-96">
      <div className="h-screen gap-[60px] w-full flex flex-col items-center py-20">
        <div className="flex flex-col items-center mt-12 mb-16 w-full max-w-[1075px] max-md:my-10 max-md:max-w-full">
          <div className="flex flex-col items-center text-center gap-3">
            <h1 className="font-bold text-6xl text-teal-900">
              Pricing
            </h1>
            <p className="mt-11 text-xl leading-8 text-center text-teal-900 max-md:mt-10 max-md:max-w-full">
              Unlock the full potential of our habit tracker app. Invest in your
              personal growth and success, and gain access to all the powerful
              features and benefits that our app has to offer. With this affordable
              pricing, you can embark on a transformative journey towards building
              positive habits and achieving your goals.
            </p>
          </div>
          <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full mb-16">
            <div className="flex gap-[60px] items-center justify-center">
              <PricingCard
                title="Monthly"
                price="40.000"
                desc={{
                  communities: "5",
                  projects: "Limited",
                  trial: "One week",
                }}
              />
              <PricingCard
                title="Annually"
                price="150.000"
                desc={{
                  communities: "10",
                  projects: "Unlimited",
                  trial: "One month",
                }}
              />
            </div>
          </div>
                
          <p className="text-xl w-[45%] text-center">
            Don't miss out on this opportunity to elevate your productivity and live
            a more fulfilling life. Invest in yourself today!
          </p>
        </div>
      </div>
    </div>

  );
};

export default Pricing;

const PricingCard = ({
  title,
  price,
  desc,
}: {
  title: string;
  price: string;
  desc: {
    trial: string;
    projects: string;
    communities: string;
  };
}) => {
  return (
    <div className="bg-ijo hover:scale-105 transition duration-500 text-center shadow-[0px_0px_50px_rgba(44,52,39,0.6)] flex flex-col p-12 text-black rounded-xl">
      <h1 className="font-semibold text-4xl">{title}</h1>
      <p className="font-bold text-5xl mt-7">Rp{price},-</p>
      <hr className="h-px border-0 bg-[#D7C6AA] mt-6" />
      <div className="m-12 flex flex-col gap-4 text-center">
        <p className="font-medium text-2xl">
          <span className="font-bold">{desc.trial}</span> free trial
        </p>
        <p className="font-medium text-2xl">
          <span className="font-bold">{desc.projects}</span> projects
        </p>
        <p className="font-medium text-2xl">
          <span className="font-bold">{desc.communities}</span> communities
        </p>
      </div>
      <button className="text-2xl border-2 text-krem border-krem py-[10px] rounded-lg hover:text-ijo hover:bg-krem transition duration-300">
        Buy This Plan
      </button>
    </div>
  );
};
