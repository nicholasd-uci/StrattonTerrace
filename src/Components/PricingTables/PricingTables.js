import React from 'react';
import './PricingTables.css'
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import { Container } from 'reactstrap';




    export default class PricingTables extends React.Component {
      handleClick = (e) => {
        e.preventDefault();
        console.log('this is:', this);
  }


        render() {
          return (
            <Container>
      <PricingTable  highlightColor='rgb(216, 188, 32)'>
          <PricingSlot onClick={this.handleClick} buttonText='ORDER' title='Basic Web Pack' priceText='$350'>
              <PricingDetail> <b>2</b> Stock Images</PricingDetail>
              <PricingDetail> <b>1</b> Page Website</PricingDetail>
              <PricingDetail> <b>1</b> Made with WIX</PricingDetail>
              <PricingDetail> <b>1</b> Contact/Query Form</PricingDetail>
              <PricingDetail>48 to 72 hours TAT</PricingDetail>
              <PricingDetail>Complete Deployment</PricingDetail>
              <PricingDetail strikethrough> <b>Mobile Responsive</b></PricingDetail>
          </PricingSlot>
          <PricingSlot highlighted onClick={this.handleClick} buttonText='ORDER' title='Startup Web Pack' priceText='$1,350'>
          <PricingDetail> <b>5</b> Stock Photos</PricingDetail>
              <PricingDetail> <b>3</b> Page Website</PricingDetail>
              <PricingDetail> <b>3</b> Banner Design</PricingDetail>
              <PricingDetail> <b>1</b> Made with WIX</PricingDetail>
              <PricingDetail>FREE Google Friendly Sitemap</PricingDetail>
              <PricingDetail>Complete Deployment</PricingDetail>
              <PricingDetail>Mobile Responsive will be Additional $200*</PricingDetail>
          </PricingSlot>
          <PricingSlot  onClick={this.handleClick} buttonText='ORDER' title='Professional Web Pack' priceText='$2,150'>
          <PricingDetail> <b>5</b> Page Website</PricingDetail>
              <PricingDetail>CMS / Admin Panel Support</PricingDetail>
              <PricingDetail> <b>8</b> Stock Images</PricingDetail>
              <PricingDetail> <b>1</b> Made with WIX</PricingDetail>
              <PricingDetail>FREE Google Friendly Sitemap</PricingDetail>
              <PricingDetail>Complete Deployment</PricingDetail>
              <PricingDetail>Mobile Responsive will be Additional $200*</PricingDetail>
          </PricingSlot>
      
      </PricingTable>
      </Container>
          );
        }
      }