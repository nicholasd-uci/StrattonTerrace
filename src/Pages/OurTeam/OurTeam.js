import React from 'react'
import Theresa from '../../Assets/OurTeam/Theresa.png'
import Nicholas from '../../Assets/OurTeam/Nicholas.png'
import Lawrence from '../../Assets/OurTeam/Lawrence. png'




import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

function OurTeam() {
    return (
        <div className="OurTeam">
      <MDBCard className="my-5 px-5 pb-1 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>
          <MDBRow className="text-md-left">
           <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <img
                  src={Nicholas}
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Nicholas Dallas</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  CEO and founder
                </h6>
                <p className="grey-text">
       
                </p>
                <a href="#!" className="p-2 fa-lg gplus-ic">
                  <MDBIcon fab icon="google-plus-g" />
                </a>
                <a href="#!" className="p-2 fa-lg li-ic">
                  <MDBIcon fab icon="linkedin-in" />
                </a>
                <a href="#!" className="p-2 fa-lg email-ic">
                  <MDBIcon icon="envelope" />
                </a>
              </MDBCol>
            </MDBCol>
            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <img
                  src={Theresa}
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Theresa Do</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                Brand Strategist & Marketing Representative
                </h6>
                <p className="grey-text">
                Theresa is a graduate from the University of California, Irvine and originally wanted to be an elementary school teacher until she found her passion for marketing and branding. Now she gets to continue helping people, but in a more creative, fun, and engaging way. 

                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="p-2 fa-lg github-ic">
                  <MDBIcon fab icon="github" />
                </a>
              </MDBCol>
            </MDBCol>
          </MDBRow>
          <MDBRow className="text-md-left">
           <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <img
                  src={Lawrence}
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Nicholas Dallas</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  CEO and founder
                </h6>
                <p className="grey-text">
                </p>
                <a href="#!" className="p-2 fa-lg gplus-ic">
                  <MDBIcon fab icon="google-plus-g" />
                </a>
                <a href="#!" className="p-2 fa-lg li-ic">
                  <MDBIcon fab icon="linkedin-in" />
                </a>
                <a href="#!" className="p-2 fa-lg email-ic">
                  <MDBIcon icon="envelope" />
                </a>
              </MDBCol>
            </MDBCol>
            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <img
                  src='https://media.giphy.com/media/mpB75VlHUWWmIX3WbN/giphy.gif'
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Theresa Do</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                Brand Strategist & Marketing Representative
                </h6>
                <p className="grey-text">
                Theresa is a graduate from the University of California, Irvine and originally wanted to be an elementary school teacher until she found her passion for marketing and branding. Now she gets to continue helping people, but in a more creative, fun, and engaging way. 

                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="p-2 fa-lg github-ic">
                  <MDBIcon fab icon="github" />
                </a>
              </MDBCol>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      </div>
    );
  }
export default OurTeam
