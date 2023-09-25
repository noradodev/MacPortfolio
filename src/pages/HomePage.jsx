import ButtonX from "../components/ButtonX";
import Lottie from "lottie-react";
import HomeAnimate from "../assets/home_animate.json";
import { BsArrowUpRight } from "react-icons/bs";
import BlogCard from "../components/BlogCard";
import blogPosts from "../BlogsData";
import { motion, useTransform, useScroll } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { useRef } from "react";
const HomePage = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <>
      <div className="container mx-auto pt-20">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
          <div className="flex  flex-col md:py-40 px-10  ">
            <h1 className="text-6xl font-extrabold ">
              Hello, I am<br></br> Rado
            </h1>
            <p className="my-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique porro dolore accusamus aliquam architecto non et a,
              laudantium vel amet voluptas, aut eos excepturi. Vel a soluta amet
              deserunt veniam.
            </p>
            <ButtonX
              name="Check out my projects"
              link="#"
              icon={<FiArrowUpRight />}
            />
          </div>
          <div className="h-full flex items-center justify-center">
            <Lottie
              animationData={HomeAnimate}
              loop={true}
              className="z-[-1] grayscale w-11/12"
            />
          </div>
        </div>

        <div className="container mx-auto px-10">
          <div>
            <h1 className="text-6xl font-extrabold">Quick Link</h1>
          </div>
          <div className=" flex  items-center justify-center flex-col md:flex-row">
            <ButtonX
              name="All Projects"
              link="#"
              icon={<BsArrowUpRight />}
              className="px-20 text-6xl"
            />
            <ButtonX
              name="Current Working"
              link="#"
              icon={<BsArrowUpRight />}
              className="px-10"
            />
            <ButtonX
              name="Finding Customer"
              link="#"
              icon={<BsArrowUpRight />}
              className="px-10 border"
            />
            <ButtonX
              name="My Resume"
              link="#"
              icon={<BsArrowUpRight />}
              className="px-10"
            />
          </div>
        </div>

        <div
          className="h-[200vh] border border-t-4 border-black "
          style={{
            backgroundImage:
              'url("https://assets.website-files.com/5e87e737ee7085b9ba02c101/5e87e737ee7085fccd02c10d_pattern-grey.svg")',
          }}
        >
          <section ref={targetRef} className="relative h-[200vh] z-[99]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
              <h1 className="text-6xl font-extrabold">Blog</h1>
              <motion.div style={{ x }} className="flex gap-4">
                {blogPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    author={post.author}
                    image={post.image}
                    title={post.title}
                    content={post.content}
                  />
                ))}
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
