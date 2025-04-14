import React from 'react';

const Section = () => {
  const data = [
    { type: 'A+', donateTo: 'A+, AB+', receiveFrom: 'A+, A-, O+, O-' },
    { type: 'O+', donateTo: 'O+, A+, B+, AB+', receiveFrom: 'O+, O-' },
    { type: 'B+', donateTo: 'B+, AB+', receiveFrom: 'B+, B-, O+, O-' },
    { type: 'AB+', donateTo: 'AB+', receiveFrom: 'Everyone' },
    { type: 'A-', donateTo: 'A+, A-, AB+, AB-', receiveFrom: 'A-, O-' },
    { type: 'O-', donateTo: 'Everyone', receiveFrom: 'O-' },
    { type: 'B-', donateTo: 'B+, B-, AB+, AB-', receiveFrom: 'B-, O-' },
    { type: 'AB-', donateTo: 'AB+, AB-', receiveFrom: 'AB-, A-, B-, O-' },
  ];

  return (
    <>
      <h1 className="text-3xl pt-2 sm:text-4xl md:text-5xl font-bold text-[#BF222B] text-center mb-0 tracking-wide">
        Learn About Donation
      </h1>
      <section className="w-full px-4 py-16 bg-[#F9E4BC]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src="./images/11.jpg"
              alt="Blood Donation"
              className="sm:w-[80%] w-[100%] rounded-lg shadow-lg"
            />
          </div>

          {/* Right Table */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-xl animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4 text-red-600">
              Compatible Blood Type Donors
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="p-3 border border-gray-300">Blood Type</th>
                    <th className="p-3 border border-gray-300">
                      Donate Blood To
                    </th>
                    <th className="p-3 border border-gray-300">
                      Receive Blood From
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, i) => (
                    <tr
                      key={i}
                      className="even:bg-gray-100 odd:bg-white hover:bg-red-50 transition">
                      <td className="p-3 border text-center font-semibold text-red-700">
                        {row.type}
                      </td>
                      <td className="p-3 border text-center">{row.donateTo}</td>
                      <td className="p-3 border text-center">
                        {row.receiveFrom}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
