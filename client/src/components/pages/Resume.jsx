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
                <li className="list-group-item bg-secondary">
                  <h2 className="fs-3">Front End Proficiencies</h2>
                </li>
                <li className="list-group-item bg-secondary">HTML</li>
                <li className="list-group-item bg-secondary">CSS</li>
                <li className="list-group-item bg-secondary">JavScript</li>
                <li className="list-group-item bg-secondary">JQuery</li>
                <li className="list-group-item bg-secondary">Responsive Design</li>
                <li className="list-group-item bg-secondary">React</li>
                <li className="list-group-item bg-secondary">Bootstrap</li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <ul className="list-group">
                <li className="list-group-item bg-secondary">
                  <h2 className="fs-3">Back End Proficiencies</h2>
                </li>
                <li className="list-group-item bg-secondary">APIs</li>
                <li className="list-group-item bg-secondary">Node</li>
                <li className="list-group-item bg-secondary">Express</li>
                <li className="list-group-item bg-secondary">Postgresql, Sequelize</li>
                <li className="list-group-item bg-secondary">MongoDB, Mongoose</li>
                <li className="list-group-item bg-secondary">REST</li>
                <li className="list-group-item bg-secondary">GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
