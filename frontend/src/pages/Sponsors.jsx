import React from "react";
import { motion } from "framer-motion";
import { SponsorCard } from "../components/sponsors/SponsorCard";
import Nav from "../components/navbar/Nav";
import { Stars } from "../components/Stars/Stars";

export const Sponsors = () => {
  const sponsorsData = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDRn75ZC_XxfPBohCpignqRFAkbXe81pqxpQ&s",
      name: "Geeks for Geeks",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio voluptas hic odit iste assumenda ipsa illo esse, dolorem dolore voluptates nobis reiciendis suscipit quo ad voluptate perspiciatis iusto sapiente minima.",
      link: "/",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDRn75ZC_XxfPBohCpignqRFAkbXe81pqxpQ&s",
      name: "Geeks for Geeks",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio voluptas hic odit iste assumenda ipsa illo esse, dolorem dolore voluptates nobis reiciendis suscipit quo ad voluptate perspiciatis iusto sapiente minima.",
      link: "/",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDRn75ZC_XxfPBohCpignqRFAkbXe81pqxpQ&s",
      name: "Geeks for Geeks",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio voluptas hic odit iste assumenda ipsa illo esse, dolorem dolore voluptates nobis reiciendis suscipit quo ad voluptate perspiciatis iusto sapiente minima.",
      link: "/",
    },
    // Add more sponsors as needed
  ];

  const teamInfo = [
    {
      name: "Sushant Sharma",
      number: "7018937275",
      email: "sushant.sharma@gmail.com",
    },
    {
      name: "Sujal Verdhan",
      number: "8626872550",
      email: "sujalverdhen1234@gmail.com",
    },

    {
      name: "Pranjal Sharma",
      number: "6230376536",
      email: "pranjal.sharma@gmail.com",
    },
  ];

  return (
    <main className="h-screen">
    <Stars/>
      <Nav />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="container mx-auto mt-[5rem] p-6"
      >
        <h1 className="text-4xl font-bold text-center gradient-text mb-8">
          Our Sponsors
        </h1>

        {/* Sponsors Section with Hover Effects */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sponsorsData.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.1,
                rotate: [0, 5, -5, 0],
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                delay: 0,
                duration: 0.2
              }}
            >
              <SponsorCard
                image={sponsor.image}
                name={sponsor.name}
                description={sponsor.description}
                link={sponsor.link}
              />
            </motion.div>
          ))}
        </section>

        {/* Contact Section with Flashy Effects */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          className="border border-yellow-500 rounded-lg p-6 bg-gray-100"
        >
          <h3 className="text-3xl font-semibold gradient-text text-center mb-6">
            Sponsorship Inquiries
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamInfo.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 150,
                }}
                whileHover={{ scale: 1.1, rotate: 5, transition: { yoyo: 3 } }}
                className="flex flex-col justify-center items-center"
              >
                <h4 className="text-xl font-semibold gradient-text">
                  {member.name}
                </h4>
                <p className="text-lg">{member.number}</p>
                <p className="text-lg">{member.email}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
};
