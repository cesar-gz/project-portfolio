import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from '../../data/portfolio.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode} from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return() => {
            clearTimeout(timer);
        }
    });

    const scrollLeft = () => {
      document.querySelector('.images-container').scrollBy({
          left: -window.innerWidth / 2, // Adjust the scroll distance as needed
          behavior: 'smooth'
      });
    };

    const scrollRight = () => {
        document.querySelector('.images-container').scrollBy({
            left: window.innerWidth / 2, // Adjust the scroll distance as needed
            behavior: 'smooth'
        });
    };


    const renderPortfolio = (portfolio) => {
        return(
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return(
                            <div className="image-box" key={idx}>
                                <img
                                src={port.cover}
                                className="portfolio-image"
                                alt={"portfolio"} />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', }}>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url2)}
                                    >GitHub</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
          </div>
        );
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title"
                        style={{
                          margin: '0 auto', display: 'flex',
                          justifyContent: 'center',
                          padding: '40px' }}>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div className="portfolio-navigation">
                  <button className="left-arrow" onClick={scrollLeft}>&#8592;</button>
                  <div>{renderPortfolio(portfolioData.portfolio)}</div>
                  <button className="right-arrow" onClick={scrollRight}>&#8594;</button>
                </div>
                <div>
                  <Link
                    exact="true"
                    activeclassname="active"
                    className="to-be-determined"
                    to="/otherProjects"
                  >
                    <FontAwesomeIcon icon={faCode} color="#8399a2" /> Other Projects
                  </Link>
                </div>
            </div>
        </>
    );
}

export default Portfolio
