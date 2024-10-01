import React from "react";
import { SponsorCard } from "../components/sponsors/SponsorCard";
import Nav from "../components/navbar/Nav";

export const Sponsors = () => {
  const sponsorsData = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDRn75ZC_XxfPBohCpignqRFAkbXe81pqxpQ&s",
      name: "Geeks for Geeks",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio voluptas hic odit iste assumenda ipsa illo esse, dolorem dolore voluptates nobis reiciendis suscipit quo ad voluptate perspiciatis iusto sapiente minima.",
    },
    // Add more sponsors as needed
  ];

  const teamInfo = [
    {
      name: "Sujal Verdhan",
      number: "8626872550",
      email: "sujalverdhen1234@gmail.com",
    },
    {
      name: "Sushant Sharma",
      number: "7018937275",
      email: "sushant.sharma@example.com",
    },
    {
      name: "Pranjal Sharma",
      number: "6230376536",
      email: "pranjal.sharma@example.com",
    },
  ];

  return (
    <main className="h-screen">
      <Nav />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-yellow-600 mb-8">
          Our Sponsors
        </h1>

        {/* Sponsors Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sponsorsData.map((sponsor) => (
            <SponsorCard
              key={sponsor.name}
              image={sponsor.image}
              name={sponsor.name}
              description={sponsor.description}
            />
          ))}
          {sponsorsData.map((sponsor) => (
            <SponsorCard
              key={sponsor.name}
              image={sponsor.image}
              name={sponsor.name}
              description={sponsor.description}
            />
          ))}
          {sponsorsData.map((sponsor) => (
            <SponsorCard
              key={sponsor.name}
              image={sponsor.image}
              name={sponsor.name}
              description={sponsor.description}
            />
          ))}
        </section>

        {/* Contact Section */}
        <section className="border border-yellow-500 rounded-lg p-6 bg-gray-100">
          <h3 className="text-3xl font-semibold text-yellow-600 text-center mb-6">
            Sponsorship Inquiries
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamInfo.map((member) => (
              <div
                key={member.name}
                className="flex flex-col justify-center items-center"
              >
                <h4 className="text-xl font-semibold text-yellow-600">
                  {member.name}
                </h4>
                <p className="text-lg">{member.number}</p>
                <p className="text-lg">{member.email}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
