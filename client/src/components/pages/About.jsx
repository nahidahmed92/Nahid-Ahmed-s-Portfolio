import { motion } from 'framer-motion';

import myPhoto from '../../../../assets/my-photo.png';

export default function About() {
  const fullStack = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const qa = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    duration: 1,
    ease: 'easeInOut',
  };

  return (
    <div className="tab-content d-flex justify-content-center text-light mx-4 mt-5 mb-4 py-5" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="home-tab-pane"
        role="tabpanel"
        aria-labelledby="home-tab"
        style={{ width: '100%' }}
        tabIndex="0">
        <h1>Nahid Ahmed</h1>
        <div className="row my-5 pe-5" id="pic-desc">
          <div className="col-12 col-md-6 order-md-1 d-flex justify-content-center">
            <img
              alt="my recent photo"
              className="img-fluid"
              id="me"
              src={myPhoto}
              style={{ maxWidth: '50%', objectFit: 'contain' }}
            />
          </div>
          <div className="col-12 col-md-6 order-md-2" id="bio" style={{ width: '48%', objectFit: 'contain' }}>
            <motion.div initial="hidden" animate="visible" variants={fullStack} transition={transition}>
              <h2
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontWeight: '400',
                  fontStyle: 'normal',
                }}>
                Full Stack Developer
              </h2>
            </motion.div>
            {/* <h2
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontWeight: '400',
                fontStyle: 'normal',
              }}>
              Full Stack Developer
            </h2> */}
            <motion.div initial="hidden" animate="visible" variants={qa} transition={transition}>
              <h3
                className="d-flex justify-content-center mb-5"
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontWeight: '400',
                  fontStyle: 'normal',
                }}>
                QA Automation Engineer
              </h3>
            </motion.div>
            {/* <h3
              className="d-flex justify-content-center"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontWeight: '400',
                fontStyle: 'normal',
              }}>
              QA Automation Engineer
            </h3> */}
            <p
              className="fs-2"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontWeight: '400',
                fontStyle: 'normal',
              }}>
              I'm a driven individual who has a strong passion for QA Automation. Recently I have done a some work in
              Full Stack Development and wanted to pursue this as a new career path. I have successfully completed the
              Full Stack Developer course from Columbia Engineering
            </p>
          </div>
        </div>
        <style>
          {`
          @media (max-width: 767px) {
            #pic-desc {
              padding-right: 0 !important;
              margin-right: 0 !important;
            }
            #me {
              margin-bottom: 3rem;
              max-width: 70% !important;
            }
            #bio {
              width: 100% !important;
            }
          }
        `}
        </style>
      </div>
    </div>
  );
}
