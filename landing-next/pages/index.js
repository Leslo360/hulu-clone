import Head from "next/head";
import { useEffect, useState } from "react";
import { Button, Carousel, Container, Jumbotron } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Features from "../components/Features";
import Members from "../components/Members";
import LandingForm from "../components/LandingForm";
import Aos from "aos";

const slides = [
  {
    id: 1,
    img:
      "https://media.luxhabitat.ae/journal/d4fc1a0c346ea351ab59360718966cde_mod_original.jpg",
    title: "Dubai",
    subTitle: "Going Above and Beyond To Find Your Next Home.",
  },
  {
    id: 2,
    img:
      "https://3saestate.com/wp-content/uploads/2019/01/14_Nocturna-exterior-piscina-1500x844.jpg",
    title: "Australia",
    subTitle: "Let Our Family Show Your Family the Way Home.",
  },
  {
    id: 3,
    img:
      "https://dfqtmp5uyho9x.cloudfront.net/prod/uploads/2019/06/home-row-1.jpg",
    title: "London",
    subTitle: "Luxury Real Estate: Redefined.",
  },
  {
    id: 4,
    img:
      "https://luxury-houses.net/wp-content/uploads/2019/11/Lions-View-Superb-Modern-Villa-in-South-Africa-by-ARRCC-2.jpg",
    title: "South Africa",
    subTitle:
      "The shortest distance between paradise and the place you call home.",
  },
];

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  let d = new Date();
  let year = d.getFullYear();
  return (
    <div className={styles.container}>
      <Head>
        <title>Group One Capital Property</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/lux/bootstrap.min.css"
        />
      </Head>

      <Carousel className={styles.carousel}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img
              className="d-block w-100 h-100 c-img"
              src={slide.img}
              alt={slide.title}
            />
            <Carousel.Caption className={styles.caption}>
              <div>
                <div className={styles.caption__body}>
                  <h3 data-aos="slide-left">{slide.title}</h3>
                  <p data-aos="slide-left">{slide.subTitle}</p>
                </div>
                <Button variant="outline-secondary" className={styles.hide}>
                  Learn More
                </Button>
              </div>
              <LandingForm />
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Features />
      <footer className={styles.footer}>
        Copyright © {year} Group One Capital Property All Right Reserved.
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossOrigin="true"
        ></script>
        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin="true"
        ></script>
        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin="true"
        ></script>
      </footer>
    </div>
  );
}
