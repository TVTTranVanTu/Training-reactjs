import React from "react";
function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p>Copyright &copy; 2021 BOOTCAMP XIV by Trần Văn Tú</p>
          </div>
          <div className="col-lg-6">
            <ul className="list-inf">
              <li className="item-inf">
                <i className="fab fa-facebook"></i>
              </li>
              <li className="item-inf">
                <i className="fab fa-github"></i>
              </li>
              <li className="item-inf">
                <i className="fab fa-skype"></i>
              </li>
              <li className="item-inf">
                <i className="fas fa-envelope"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
