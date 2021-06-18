import React from 'react'
import './HostingPricing.css'
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import { Container } from 'reactstrap';



    export default class HostingPricing extends React.Component {
        constructor(props) {
          super(props);
          this.tooltipRef = React.createRef();
        }
      
        render() {
          
          return (
            <Container>
      <PricingTable  highlightColor='rgb(216, 188, 32)'>
          <PricingSlot  onClick={this.submit} buttonText='ORDER' title='Hosting' priceText='$29.99/Mo'>
              <PricingDetail>Hosting</PricingDetail>
              <PricingDetail> Maintenance</PricingDetail>
              <PricingDetail> Consultation</PricingDetail>
              <PricingDetail 
              > <b>Ecommerce</b></PricingDetail>
              <PricingDetail strikethrough> <b>Emails</b></PricingDetail>
              <PricingDetail strikethrough> <b>Revisions</b></PricingDetail>
          </PricingSlot>
          <PricingSlot highlighted onClick={this.submit} buttonText='ORDER' title='Hosting & Maintenance' priceText='$65.99/Mo'>
          <PricingDetail>Hosting</PricingDetail>
              <PricingDetail> Maintenance</PricingDetail>
              <PricingDetail> Consultation</PricingDetail>
              <PricingDetail> <b>Ecommerce</b></PricingDetail>
              <PricingDetail> <b>Emails</b></PricingDetail>
              <PricingDetail> <b>Revisions</b></PricingDetail>
          </PricingSlot>
      </PricingTable>
      </Container>

          );
          
        }
      }