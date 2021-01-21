import React, { useEffect, createRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import smoothscroll from 'smoothscroll-polyfill';
import Page from '../components/Page';
import Button, { ButtonLink } from '../components/Button';
import './Home.scss';

export default function Home(): JSX.Element {
  const aboutRef = createRef<HTMLDivElement>();
  const [showButton, setShowButton] = useState(false);
  const skillsData = [
    {
      title: 'Languages',
      text:
        'TypeScript, Python, C/C++, JavaScript, CSS/SASS, HTML5, Go, C#, GraphQL and MATLAB. Additionally, I have experience writing ARM Assembly and Verilog for coursework.',
      img: 'code-1.jpg',
      alt: 'CSS code',
      icon: 'code.svg',
    },
    {
      title: 'Cloud',
      text:
        'I have developed several applications using the AWS Amplify and Google Firebase frameworks. AWS products I&apos;ve used in production include: DynamoDB, AppSync, Lambda, CloudFront and S3 Storage.',
      img: 'cloud.jpg',
      alt: 'Light shining through dark clouds',
      icon: 'cloud.svg',
    },
    {
      title: 'Frameworks & more',
      text:
        'I am highly experienced with React, React Native, Node.js and GitHub. As a Machine Intelligence major, I have experience using PyTorch, NumPy, OpenCV, pandas, Matplotlib and scikit-learn.',
      img: 'code-2.jpg',
      alt: 'JavaScript code',
      icon: 'build.svg',
    },
  ];

  const handleResize = () => {
    const h = window.innerHeight;
    const w = window.innerWidth;
    setShowButton(!(w / h <= 1.6 && w >= 768));
  };

  useEffect(() => {
    smoothscroll.polyfill();
    handleResize();
  }, []);

  useEffect(() => {
    const resizeListener = () => {
      handleResize();
    };

    window.addEventListener('resize', resizeListener);
    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  const scroll = () => {
    aboutRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Page mode="light" absolute>
      <div className="container-fluid position-absolute">
        <div
          className="row align-items-center hero-content"
          style={{ textAlign: 'center' }}
        >
          <div className="col-md-6 m-auto">
            <h1 className="text-white text-uppercase">Jon Esparaz</h1>
            <div className="accent-bar" />
            <p className="text-white">
              Engineering Science | University of Toronto
            </p>
            {showButton ? (
              <Button onClick={scroll} type="button" testId="about-me-btn">
                About Me
              </Button>
            ) : null}
          </div>
        </div>
      </div>
      <img
        className="hero-image"
        src="https://d3posj7vfpgqcz.cloudfront.net/images/keyboard.jpg"
        srcSet="https://d3posj7vfpgqcz.cloudfront.net/images/keyboard-720.jpg 720w, https://d3posj7vfpgqcz.cloudfront.net/images/keyboard-1080.jpg 1080w, https://d3posj7vfpgqcz.cloudfront.net/images/keyboard-1921.jpg 1921w, https://d3posj7vfpgqcz.cloudfront.net/images/keyboard.jpg 2870w"
        sizes="(min-width: 768px) 100vw, 50vw"
        alt="mechanical keyboard"
      />
      <div className="container py-5" ref={aboutRef}>
        <div className="mx-2">
          <b>About me: </b>
          I&apos;m a 3rd year Machine Intelligence major in the University of
          Toronto&apos;s Engineering Science program. I enjoy writing software,{' '}
          <Link className="Link" to="/speedcubing">
            solving Rubik&apos;s Cubes
          </Link>{' '}
          and a good game of basketball.
        </div>
      </div>
      <div className="container">
        <div className="row">
          {skillsData.map((item) => {
            return (
              <div className="col-md-4 d-flex" key={item.title}>
                <Card className="mx-1 mb-4" style={{ borderRadius: 0 }}>
                  <CardBody className="d-flex flex-column">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase"
                      style={{ textAlign: 'center' }}
                    >
                      <img
                        src={`/svg/${item.icon}`}
                        alt=""
                        className="skill-icon"
                      />
                      {item.title}
                    </CardTitle>
                    <CardText className="flex-grow-1">{item.text}</CardText>
                    <CardImg
                      style={{ borderRadius: 0 }}
                      src={`https://d3posj7vfpgqcz.cloudfront.net/images/${item.img}`}
                      alt={item.alt}
                    />
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="row mt-5" style={{ textAlign: 'center' }}>
          <div>
            <h3>Have an idea? Let&apos;s connect.</h3>
            <ButtonLink to="/contact" dark>
              Contact Me
            </ButtonLink>
          </div>
        </div>
      </div>
    </Page>
  );
}
