import React from 'react'
import './PricingTables.css'
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import { Container } from 'reactstrap';



    export default class PricingTables2 extends React.Component {
        constructor(props) {
          super(props);
          this.tooltipRef = React.createRef();
        }
      
        render() {
        
          return (
              <Container>
      <PricingTable  highlightColor='rgb(216, 188, 32)'>
          <PricingSlot  onClick={this.submit} buttonText='ORDER' title='Landing Page' priceText='$450'>
              <PricingDetail> <b>1</b> Page Website</PricingDetail>
              <PricingDetail> <b>2</b> Stock Images</PricingDetail>
              <PricingDetail> <b>1</b> Made with WordPress</PricingDetail>
              <PricingDetail> <b>1</b> Contact/Query Form</PricingDetail>
              <PricingDetail>48 to 72 hours TAT</PricingDetail>
              <PricingDetail>Complete Deployment</PricingDetail>
              <PricingDetail strikethrough> <b>Mobile Responsive</b></PricingDetail>
          </PricingSlot>
          <PricingSlot  onClick={this.submit} buttonText='ORDER' title='PROFESSIONAL' priceText='$1,550'>
          <PricingDetail> <b>10</b> Page Website</PricingDetail>
              <PricingDetail>CMS / Admin Panel Support</PricingDetail>
              <PricingDetail> <b>8</b> Stock Images</PricingDetail>
              <PricingDetail>Made with WordPress</PricingDetail>
              <PricingDetail>FREE Google Friendly Sitemap</PricingDetail>
              <PricingDetail>Complete Deployment</PricingDetail>
              <PricingDetail>Mobile Responsive will be Additional $200*</PricingDetail>
          </PricingSlot>
          <PricingSlot highlighted onClick={this.submit} buttonText='ORDER' title='Startup Web Package' priceText='$2,450'>
          <PricingDetail> <b>5</b> Stock Photos</PricingDetail>
              <PricingDetail> <b>10+</b> Page Website</PricingDetail>
              <PricingDetail> <b>3</b> Banner Design</PricingDetail>
              <PricingDetail>Made with WordPress</PricingDetail>
              <PricingDetail>FREE Google Friendly Sitemap</PricingDetail>
              <PricingDetail>Complete Deployment</PricingDetail>
              <PricingDetail>Mobile Responsive will be Additional $200*</PricingDetail>
          </PricingSlot>
         
      
      </PricingTable>
      </Container>

          );
          
        }
      }