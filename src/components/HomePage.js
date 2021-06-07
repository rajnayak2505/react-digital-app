import React from "react";
import Data from "./Data";
import ItemData from "./ItemData";

const HomePage = () => {
  const items = Data;

  //   console.log(items);

  return (
    <div>
      <section
        className="atf-section flex jcc aic center"
        style={{ backgroundImage: "url(/images/banner.png)" }}
      >
        <div className="grid">
          <div className="info ">
            <h1>
              <span>Enterprise AI</span> solutions to power the{" "}
              <span> next wave</span> of <span>intelligent automation</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
          </div>
        </div>
      </section>
      <section className="btf-section">
        <div className="grid center">
          <h2>What Customers Use Us For</h2>
          <p className="btf-info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <ul className="flex jcsb fww">
            {items.map((item, index) => (
              <ItemData
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
