import myPhoto from '../../../../assets/my-photo.png';

export default function About() {
  return (
    <div
      className="tab-pane fade show active"
      id="home-tab-pane"
      role="tabpanel"
      aria-labelledby="home-tab"
      style={{ width: '100%' }}
      tabIndex="0">
      <h1>About Me</h1>
      <div className="row my-5 pe-5" id="pic-desc">
        <div className="col-12 col-md-6 order-md-1 d-flex justify-content-center">
          <img alt="my recent photo" className="img-fluid" id="me" src={myPhoto} style={{ width: '50%' }} />
        </div>
        <div className="col-12 col-md-6 order-md-2">
          <p
            className="fs-2"
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontWeight: '400',
              fontStyle: 'normal',
            }}>
            I'm a driven individual who has a strong passion for QA Automation. Although I didn't initially pursue this
            field after completing my college education, I made a deliberate career change because of my deep enthusiasm
            for it. I look forward to starting my day eagerly anticipating in the work I will contribute.
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
              width: 100% !important;
            }
          }
        `}
      </style>
    </div>
  );
}
