import myPhoto from '../../../assets/my-photo.png';

export default function About() {
  return (
    <div
      className="tab-pane fade show active"
      id="home-tab-pane"
      role="tabpanel"
      aria-labelledby="home-tab"
      tabIndex="0">
      <h1>About Me</h1>
      <img
        alt="my recent photo"
        id="me"
        src={myPhoto}
        style={{
          float: 'left',
          maxWidth: '20%',
          marginRight: '20px',
        }}
      />
      <p className="text-align-justify">
        I'm a driven individual who has a strong passion for QA Automation. Although I didn't
        initially pursue this field after completing my college education, I made a deliberate
        career change because of my deep enthusiasm for it. I look forward to starting my day
        eagerly anticipating in the work I will contribute.
      </p>
      <style>
        {`
      @media (min-width: 768px) {
        #home-tab-pane {
          width: 50%;
        }
      }
    `}
      </style>
    </div>
  );
}
