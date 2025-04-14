import React from 'react';

const Section2 = () => {
  return (
    <section className="w-full bg-[#BF222B] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#F9E4BC] mb-8">
          Types of Donation
        </h2>

        {/* Description */}
        <p className="text-center text-[#F9E4BC] max-w-4xl mx-auto mb-10 text-lg leading-relaxed">
          The average human body contains about five liters of blood, which is
          made of several cellular and non-cellular components such as Red blood
          cells, Platelets, and Plasma.
          <br />
          <br />
          Each type of component has its unique properties and can be used for
          different indications. The donated blood is separated into these
          components by the blood centre, and one donated unit can save up to
          four lives depending on the number of components separated from your
          blood.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Packed Red Blood Cells */}
          <div className="bg-[#F9E4BC] shadow-md p-6 rounded-xl hover:shadow-xl transition-all duration-300 border-t-4 border-white">
            <h3 className="text-xl font-semibold text-[#BF222B] mb-2">
              Packed Red Blood Cells
            </h3>
            <p className="text-[#242729] mb-2">
              <span className="font-semibold">What is it?</span>
              <br />
              Blood is collected, centrifuged and red cells are separated and
              mixed with a preservative.
            </p>
            <p className="text-[#242729] mb-2">
              <span className="font-semibold">Who can donate?</span>
              <br />
              18-65 years old, weight 45kg or more, fit and healthy.
            </p>
            <p className="text-[#242729] mb-2">
              <span className="font-semibold">Used for?</span>
              <br />
              Severe anemia, childbirth, surgery or trauma.
            </p>
            <p className="text-[#242729] mb-2">
              <span className="font-semibold">Lasts for?</span>
              <br />
              42 days at 2-6°C.
            </p>
            <p className="text-[#242729] mb-2">
              <span className="font-semibold">Donation time?</span>
              <br />
              15–30 minutes (incl. pre-check).
            </p>
            <p className="text-[#242729]">
              <span className="font-semibold">How often?</span>
              <br />
              Males: 90 days | Females: 120 days
            </p>
          </div>

          {/* Card 2: Plasma */}
          <div className="bg-[#F9E4BC] shadow-md p-6 rounded-xl hover:shadow-xl transition-all duration-300 border-t-4 border-white">
            <h3 className="text-xl font-semibold text-[#BF222B] mb-2">
              Plasma
            </h3>
            <p className="text-[#242729] mb-2">
              <span className="font-semibold">What is it?</span>
              <br />
              Plasma is the liquid component of blood that carries cells and
              proteins throughout the body.
            </p>
            <p className="text-[#242729] mb-2">
              <span className="font-semibold">Who can donate?</span>
              <br />
              Healthy individuals between 18–65 years old.
            </p>
            <p className="text-[#242729] mb-2">
              <span className="font-semibold">Used for?</span>
              <br />
              Treating patients with clotting disorders, burns, and trauma.
            </p>
            <p className="text-[#242729] mb-2">
              <span className="font-semibold">Lasts for?</span>
              <br />
              Frozen plasma can be stored for up to 1 year.
            </p>
            <p className="text-[#242729] mb-2">
              <span className="font-semibold">Donation time?</span>
              <br />
              Around 45 minutes.
            </p>
            <p className="text-[#242729]">
              <span className="font-semibold">How often?</span>
              <br />
              Every 2 weeks.
            </p>
          </div>

          {/* Card 3: Platelet */}
          <div className="bg-[#F9E4BC] shadow-md p-6 rounded-xl hover:shadow-xl transition-all duration-300 border-t-4 border-white">
            <h3 className="text-xl font-semibold text-[#BF222B] mb-2">
              Platelet
            </h3>
            <p className="text-[#242729] mb-2">
              <span className="font-semibold">What is it?</span>
              <br />
              Platelets help blood to clot. Extracted from blood using apheresis
              or separation.
            </p>
            <p className="text-[#242729] mb-2">
              <span className="font-semibold">Who can donate?</span>
              <br />
              18-60 years, healthy and at least 50kg.
            </p>
            <p className="text-[#242729] mb-2">
              <span className="font-semibold">Used for?</span>
              <br />
              Cancer patients, surgeries, or bleeding disorders.
            </p>
            <p className="text-[#242729] mb-2">
              <span className="font-semibold">Lasts for?</span>
              <br />
              Just 5 days.
            </p>
            <p className="text-[#242729] mb-2">
              <span className="font-semibold">Donation time?</span>
              <br />
              1.5 to 2 hours.
            </p>
            <p className="text-[#242729]">
              <span className="font-semibold">How often?</span>
              <br />
              Every 2 weeks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
