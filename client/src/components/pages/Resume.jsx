export default function Resume() {
  return (
    <div
      className="tab-content d-flex flex-column justify-content-center text-light mx-4 mt-5 mb-4 py-5"
      id="myTabContent">
      <h1>Resume</h1>
      <div
        className="tab-pane fade show active my-5"
        id="resume-tab-pane"
        role="tabpanel"
        aria-labelledby="resume-tab"
        // style={{ width: '100%' }}
        tabIndex="0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <ul className="list-group">
                <li className="list-group-item">
                  <h2 className="fs-3">Front End Proficiencies</h2>
                </li>
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">JavScript</li>
                <li className="list-group-item">JQuery</li>
                <li className="list-group-item">Responsive Design</li>
                <li className="list-group-item">React</li>
                <li className="list-group-item">Bootstrap</li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <ul className="list-group">
                <li className="list-group-item">
                  <h2 className="fs-3">Back End Proficiencies</h2>
                </li>
                <li className="list-group-item">APIs</li>
                <li className="list-group-item">Node</li>
                <li className="list-group-item">Express</li>
                <li className="list-group-item">Postgresql, Sequelize</li>
                <li className="list-group-item">MongoDB, Mongoose</li>
                <li className="list-group-item">REST</li>
                <li className="list-group-item">GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
