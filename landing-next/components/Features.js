import {
  EcoOutlined,
  EmojiEventsOutlined,
  ExtensionOutlined,
  VerifiedUserOutlined,
} from "@material-ui/icons";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import styles from "../styles/Features.module.css";

const Features = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in",
    });
  }, []);
  return (
    <div className={styles.container} id="About">
      <h1 data-aos="fade">About Us</h1>
      <p data-aos="fade-right">
        Group One Capital Properties leverages its networking and knowledgeable
        skills to provide high-end luxury properties and investment
        opportunities to our clients.
      </p>
      <p data-aos="fade-right">
        The motivation for GOCP was that there has been an increase in people
        looking to extend their portfolios into the property industry, whether
        it is a holiday home, apartment, or penthouse. We are able to deliver on
        your requests in the U.K, Dubai, South Africa, and Australia.
      </p>
      <p data-aos="fade-right">
        Through our established partnerships, we are able to provide clients
        with world-class services on several continents.
      </p>

      <h1 data-aos="fade">Values</h1>

      <div className={styles.values}>
        <div className={styles.value} data-aos="fade-down">
          <EmojiEventsOutlined />
          <h5>Quality</h5>
          <p>
            We deliver only excellence and aim to exceed expectations in
            everything we do
          </p>
        </div>
        <div className={styles.value} data-aos="fade-down">
          <VerifiedUserOutlined />
          <h5>Intergrity</h5>
          <p>
            We conduct ourselves in the highest ethical standards, demonstrating
            honesty and fairness in every decision and action.
          </p>
        </div>
        <div className={styles.value} data-aos="fade-down">
          <EcoOutlined />
          <h5>Agility</h5>
          <p>We execute expeditiously to address our clients’ needs</p>
        </div>
        <div className={styles.value} data-aos="fade-down">
          <ExtensionOutlined />
          <h5>Innovative</h5>
          <p>
            We pursue excellence by pushing each other to be better every day
            and seeing possibility instead of limitation.
          </p>
        </div>
      </div>

      <h1 data-aos="fade">Meet The Team</h1>

      <div className={styles.members}>
        <div className={styles.member} data-aos="flip-up" data-aos-delay="100">
          <img src="https://gocf-demo.web.app/static/media/brian.021a339c.jpg" />
          <h6>Brian N. Zhanda</h6>
          <h7>Executive Director</h7>
        </div>
        <div className={styles.member} data-aos="flip-up" data-aos-delay="400">
          <img src="https://gocf-demo.web.app/static/media/keith.233216ae.png" />
          <h6>Keith Shaba</h6>
          <h7>Regional Acquisitions Officer for Africa</h7>
        </div>
        <div className={styles.member} data-aos="flip-up" data-aos-delay="600">
          <img src="https://gocf-demo.web.app/static/media/fungai.8a5747d0.jpg" />
          <h6>Fungai T. Chapita</h6>
          <h7>Head of New Business</h7>
        </div>
      </div>
    </div>
  );
};

export default Features;
