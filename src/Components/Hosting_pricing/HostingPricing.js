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
          <PricingSlot highlighted onClick={this.submit} buttonText='ORDER' title='Starter Hosting service package' priceText='$29.99/Mo'>
              <PricingDetail>Hosting Assistance</PricingDetail>
              <PricingDetail>Domain Protection - SSL Certified</PricingDetail>
              <PricingDetail>Domain Support</PricingDetail>
              <PricingDetail 
              > <b>Fast Page Loading</b></PricingDetail>
              <PricingDetail 
              > <b>Ecommerce Support</b></PricingDetail>
              <PricingDetail strikethrough> <b>Revisions</b></PricingDetail>
              <PricingDetail strikethrough> <b>Email Marketing Template</b></PricingDetail>
          </PricingSlot>
          <PricingSlot onClick={this.submit} buttonText='ORDER' title='Basic Hosting & Maintenance' priceText='$65.99/Mo'>
          <PricingDetail>Hosting Assistance</PricingDetail>
              <PricingDetail> Mo Maintenance Revisions</PricingDetail>
              <PricingDetail> <b>Revisions: 1-2 </b></PricingDetail>
              <PricingDetail> Monthly Consultation</PricingDetail>
              <PricingDetail> <b>One: 1-Hour sessions </b></PricingDetail>
              <PricingDetail> <b>Ecommerce Support</b></PricingDetail>
              <PricingDetail> <b>Email Marketing Template</b></PricingDetail>
          </PricingSlot>
          <PricingSlot onClick={this.submit} buttonText='ORDER' title='Advanced Hosting & Maintenance' priceText='$77.99/Mo'>
          <PricingDetail>Hosting Assistance</PricingDetail>
              <PricingDetail> Mo Maintenance Revisions</PricingDetail>
              <PricingDetail> <b>Revisions: 3-4 </b></PricingDetail>
              <PricingDetail> Monthly Consultation</PricingDetail>
              <PricingDetail> <b>Two: 1-Hour sessions </b></PricingDetail>
              <PricingDetail> <b>Ecommerce Support</b></PricingDetail>
              <PricingDetail> <b>Email Marketing Template</b></PricingDetail>
          </PricingSlot>
          <PricingSlot highlighted onClick={this.submit} buttonText='ORDER' title='Unlimited Hosting & Maintenance' priceText='$99.99/Mo'>
          <PricingDetail>Hosting Assistance</PricingDetail>
              <PricingDetail> Mo Maintenance Revisions</PricingDetail>
              <PricingDetail> <b>Revisions: Unlimited</b></PricingDetail>
              <PricingDetail> Monthly Consultation</PricingDetail>
              <PricingDetail> <b>Three: 1-Hour sessions </b></PricingDetail>
              <PricingDetail> <b>Ecommerce Support</b></PricingDetail>
              <PricingDetail> <b>Email Marketing Template</b></PricingDetail>
              
          </PricingSlot>
      </PricingTable>
      </Container>

          );
          
        }
      }