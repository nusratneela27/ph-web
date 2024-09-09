import { useEffect } from "react";

import html5 from "../../assets/skills/html5-c2c893de.svg";
import css from "../../assets/skills/css3-8b31a8b3.svg";
import tailwind from "../../assets/skills/tailwind-css-f83a39de.svg";
import reactjs from "../../assets/skills/react-js-6b2531f8.svg";
import nodejs from "../../assets/skills/node-js-6a6d9a42.svg";
import expressjs from "../../assets/skills/express-js-1514c0ea.svg";
import mongodb from "../../assets/skills/mongodb-f2c61865.svg";
import javascript from "../../assets/skills/javascript-6e73ba73.svg";
import bootstap from "../../assets/skills/bootstap.jpeg";
import firebase from "../../assets/skills/firebase.png";
import jwt from "../../assets/skills/jwt.png";
import nextjs from "../../assets/skills/nextjs.png";
import redux from "../../assets/skills/redux.png";
import stripe from "../../assets/skills/stripe.png";
import github from "../../assets/skills/github.png";
import figma from "../../assets/skills/figma.jpg";
import netlify from "../../assets/skills/netlify.jpg";

const Developer = () => {
  return (
    <div className="px-10 md:px-40 md:mt-20 md:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 border border-gray-400 rounded-2xl px-5 py-10 md:px-10 md:py-20 text-gray-800">
        <div className="m-auto lg:border-r-2 lg:pe-5">
          <h1 className="text-2xl font-semibold mb-2">About Me</h1>
          <div className="text-justify space-y-4">
            <p>
              I'm a talented and enthusiastic web developer. Many web
              development technologies, such as HTML, CSS, JavaScript, React JS,
              Express JS, and MongoDB, are familiar to me. I completed a few
              incredible full-stack initiatives. I'm prepared to put my year of
              web programming experience to use.
            </p>
            <p>
              Seeking chances to advance as a software engineer so I can produce
              higher caliber web applications and more. I'd be happy to work
              from home, but I'm also open to moving to a US or European
              country.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Skills</h1>
          <div className="flex flex-wrap items-center">
            <h2 className="font-semibold underline mr-1">Web Technologies: </h2>
            <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
              <img src={html5} width={26} />
              <h3 className="font-semibold">HTML5</h3>
            </div>
            <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
              <img src={css} width={26} />
              <h3 className="font-semibold">CSS</h3>
            </div>
            <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
              <img src={javascript} width={26} />
              <h3 className="font-semibold">JavaScript</h3>
            </div>
            <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
              <img src={reactjs} width={26} />
              <h3 className="font-semibold">ReactJS</h3>
            </div>
            <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
              <img src={tailwind} width={26} />
              <h3 className="font-semibold">Tailwind CSS</h3>
            </div>
            <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
              <img src={bootstap} width={26} />
              <h3 className="font-semibold">Bootstarp</h3>
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <h2 className="font-semibold underline mr-1">Comfortable: </h2>
            <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
              <img src={mongodb} width={26} />
              <h3 className="font-semibold">MongoDB</h3>
            </div>
            <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
              <img src={nodejs} width={26} />
              <h3 className="font-semibold">NodeJS</h3>
            </div>
            <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
              <img src={expressjs} width={26} />
              <h3 className="font-semibold">ExpressJS</h3>
            </div>
            <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
              <img src={jwt} width={26} />
              <h3 className="font-semibold">JWT</h3>
            </div>
            <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
              <img src={stripe} width={26} />
              <h3 className="font-semibold">Stripe</h3>
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <h2 className="font-semibold underline mr-1">Familiar: </h2>
            <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
              <img src={redux} width={26} />
              <h3 className="font-semibold">Redux</h3>
            </div>
            <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
              <img src={nextjs} width={26} />
              <h3 className="font-semibold">NextJS</h3>
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <h2 className="font-semibold underline mr-1">Others: </h2>
            <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
              <img src={firebase} width={26} />
              <h3 className="font-semibold">Firebase</h3>
            </div>
            <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
              <img src={figma} width={26} />
              <h3 className="font-semibold">Figma</h3>
            </div>
            <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
              <img src={netlify} width={26} />
              <h3 className="font-semibold">Netlify</h3>
            </div>
            <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
              <img src={github} width={26} />
              <h3 className="font-semibold">GitHub</h3>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold mb-2">
            Educational background
          </h1>
          <p>Bachelor of Science in Computer Science and Engineering </p>
          <p>National University (Dhaka City College)</p>
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Experience</h1>
            <p>The It Studio (Rajasthan, India)</p>
            <p>FullStack Developer Internship (2 months) </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
