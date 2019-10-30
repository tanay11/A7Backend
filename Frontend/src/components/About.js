import React, { Component } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import styled from "styled-components";
import { ReactComponent as Expand } from '../icons/expand.svg'

const Bar = styled.div`
padding: 2rem;
background: wheat;
border: 2px solid lemonchiffon;
border-radius: 20px 20px;
font-size:1.5rem;
text-align: center;
`
const ExpBut = styled.button`
width:10%;
border: none;
background: transparent;
float:right;
outline:none;
`
const Features = styled.h4`
    color:red;
    text-align:start;

`

export class About extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div style={{ padding: '2rem 0' }}>
        <Bar> About Lucian Paints
        <ExpBut color="primary" onClick={this.toggle}><Expand className="largeicon" /></ExpBut>
          <Collapse style={{ margin: '2rem' }} isOpen={this.state.collapse}>
            <Card style={{ padding: '0 2rem' }}>
              <CardBody>
                <Features>Lucian Paints </Features>
                <p>Lucian Paints Indore is a manufacturing unit established by experts
                   especially Decorative Paints over the period of 3 Yrs in 2017. Experts from renowned firms of Rajasthan,
                    Maharashtra and Madhya Pradesh respectively Shreenath Agency Udaipur,
                     Lucian Paints Indore and A7 Enterprises Nashik.
                Lucian Paints products are Lead free and Eco-Friendly water based products as per norms.</p>

                Lucian Paints started production aiming providing “Quality paints products in reasonable prices” to its customer & industry needs with outperformance quality and durability in Pan India. Currently we are widespread in the state of Madhya Pradesh, Maharashtra, Gujarat and Rajasthan location; Okha, western Madhya Pradesh, Nashik, Nagpur, Kolhapur, Udaipur and southern part of Rajasthan. Chattisgarh, central & eastern Madhya Pradesh products will be available for customers through Distribution and Dealers networks.

Currently Lucian Paints focusing on the 3 products Cement based water primer, Luxury Silky Emulsions (Plastic) and Dark Shades in the premium and shine quality. Though we have other premium quality products like; Distemper, wall putty, premium emulsions etc. Post Diwali Lucian Paints will come up with segment in Enamel both oil & water based.
<br />
                <br />
                <p className="center">For more Details Visit</p>
                <p className="center"> <a href="https://drive.google.com/open?id=1vzK4YvK5LXyXzgvf5D1-vf2OP1QhEGpu">lucianpaintsdetails.info</a></p>
                <br />

                <Features>Better Performance</Features>
                <p>
                  Lucian Paint offers excellent resistance to chalking, cracking
  and weathering in comparison to cement paint. Its
  modified acrylic binder ensures that paint stays on
  your wall longer than cement paint.
                </p>
                <Features>Clean Shades</Features>
                <p>
                  Our Paint gives neat and clean shades that do not fade
                  and last longer than cement paint shades. It is
                  available in strong/dark shades that provide excellent
hiding. It is available in 16 attractive shades.</p>

                <Features>Save Money</Features>
                <p>
                  This paint lasts longer than cement paint and hence
                  proves more economical in the long run. It also does
                  not require curing and therefore saves time, effort
                  and money during.
</p>

                <hr />
                <ul>
                  <li>Contact Address: Operating Address: Office: House No. 407, Near Raigarh Chowk, Pavan Nagar Area, CIDCO, Nashik, MH - 422009</li>

                  <li>Contact No. 8007646656 and Email: a7.nasik@gmail.com</li>
                </ul>

              </CardBody>
            </Card>
          </Collapse>
        </Bar>
      </div>
    );
  }
}
