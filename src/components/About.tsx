/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Button } from "./ui/button";
const About = () => {
  return (
    <section
      className="grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center"
      id="about"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="xl: pl-[135px]"
      >
        <h1 className="mb-9">
          Let's Talk about <span className="text-orange">Us</span>{" "}
        </h1>
        <p className="mb-8">
          Mauris nam et ipsum ipsum in. Risus nullam in sit mi est justo at
          fringilla. Consequat ac fringilla quis enim, sit ipsum. Laoreet eget
          metus morbi convallis gravida elementum facilisis. Neque enim quis
          fusce amet. Pellentesque netus vel eu
        </p>

        <p className="mb-10">
          posuere ultrices facilisi. Senectus velit lobortis velit arcu varius
          lectus mattis. Dictum aenean duis aliquet Tortor purus egestas urna
          scelerisque vel ornare lectus ultricies. Nisi, eu ut ultricies enim
          enim amet porttitor. Volutpat ac tellus volutpat eget volutpat orci
          enim, ut a. Turpis adipiscing eleifend dignissim viverra euismod
          ultrices.
        </p>
        <Button> Read more</Button>
      </motion.div>
      <motion.div
        variants={fadeIn("center", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src="/about/img.png"
          width={705}
          height={771}
          alt=""
          className="hidden xl:flex"
        />
      </motion.div>
    </section>
  );
};

export default About;
