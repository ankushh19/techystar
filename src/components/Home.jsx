import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everday. We are leading tech company whose aim is to increase the
            problem solving abilty in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            dicta impedit amet dolorum veritatis voluptate repudiandae
            architecto quod delectus quisquam iusto mollitia, qui fugiat! Quia
            labore saepe possimus corrupti at. Illum, totam eveniet odit unde
            perspiciatis voluptatem placeat laboriosam, libero ad voluptatum
            fugiat non accusamus eos ullam fuga odio autem illo rerum sed sit?
            Veritatis reiciendis fuga porro accusamus mollitia? Quasi
            temporibus, voluptatem voluptate dignissimos id iste ab odit
            veritatis similique soluta minima officiis voluptas obcaecati
            consequatur vero ea, neque minus, molestias ipsa explicabo. Ex ipsa
            debitis odio cum itaque.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
