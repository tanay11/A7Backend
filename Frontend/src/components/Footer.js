import React from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  z-index:0;
  @media (max-width: 576px) {
    width:1170px;
  } 
`

const FooterPage = () => {
  return (
    <Wrap>
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Our Vision</h5>
              <p>
                Vision: To secure the demands of Lower and Middle income groups with quality products,<br />
                in reasonable {"&"} affordable prices in Pan India.
            </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Contact Your Nearest Seller For asistance </h5>
              <ul style={{ color: "black", listStyleType: "square" }}>
                <li>
                  <p>A7 Enterprises Nashik --- H No.-407, Near Raigarh Chowk, Pavan Nagar Area,<br /> CIDCO, Nashik, MH - 422009 ..Contact -8007646656</p>
                </li>
                <li>
                  <p>NAGPUR AKSHAY MOHANE/VIDHARBHA --- 516, ORBITAL EMPIRE, IMPERIAL TOWER, EKATMATA NAGAR ROAD, JAITALA, NAGPUR 440036,<br /> ..Contact -7588906083</p>
                </li>
                <li>
                  <p>Lucian Paints Indore --- 301/2, Tejaji Chowk, Palda, Indore, MP ..Contact -9669916160</p>
                </li>
                <li>
                  <p>ELITE ENTERPRISES/KOLHAPUR region  --- SHAUMIL CHOWK, RAJARAMPURI,<br /> 2TH LANE KOLHAPUR  NASHIK-416008 ..Contact -8983638932/8668924245</p>
                </li>
                {/* <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li> */}
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <hr />
        <div className="text-center py-3">
          <ul className="list-unstyled list-inline mb-0">
            <li className="list-inline-item">
              <h5 className="mb-1">Register for free</h5>
            </li>
            <li className="list-inline-item">
              <Link to="/register" className="btn btn-danger btn-rounded">
                Sign up!</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="text-center">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/search/top/?q=lucian%20paints&epa=SEARCH_BOX" className="btn-floating btn-sm btn-fb mx-1">
                <i className="fab fa-facebook-f"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <p className="btn-floating btn-sm btn-tw mx-1">
                <i className="fab fa-twitter"> </i>
              </p>
            </li>
            <li className="list-inline-item">
              <p className="btn-floating btn-sm btn-gplus mx-1">
                <i className="fab fa-google-plus"> </i>
              </p>
            </li>
            <li className="list-inline-item">
              <p className="btn-floating btn-sm btn-li mx-1">
                <i className="fab fa-linkedin-in"> </i>
              </p>
            </li>
            <li className="list-inline-item">
              <p className="btn-floating btn-sm btn-dribbble mx-1">
                <i className="fab fa-dribbble"> </i>
              </p>
            </li>
          </ul>
        </div>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: @ LucianA7Nasik.com
        </MDBContainer>
        </div>
      </MDBFooter>
    </Wrap>
  );
}

export default FooterPage;