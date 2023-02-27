import React from "react";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";

import servicesData from "../../assets/data/serviceData.js";

export const Services = () => {
  return (
    <section className="services my-1 lg:my-32">
      <Container>
        <Row className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-fit m-auto ">
          {servicesData.map((service, index) => {
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                style={{ backgroundColor: `${service.bg}` }}
                className={`service_item p-4 flex items-center gap-x-2 rounded-md max-w-sm`}
              >
                {" "}
                <span>
                  <i
                    className={`${service.icon} text-4xl bg-dark-green p-3 rounded-full text-white`}
                  ></i>
                </span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
