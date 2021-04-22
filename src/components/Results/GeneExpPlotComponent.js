/*!

=========================================================
* SciLicium Platform v0.0.1
=========================================================

* Copyright 2021 SciLicium (https://www.scilicium.com)

* Coded by SciLicium
* Author: Thomas Darde

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import axios from "axios";
import GraphSelector from './GraphSelector'
import GraphSelectorLight from './GraphSelectorLight'

import { toastOnError } from "../../utils/Utils";
import { trackPromise } from 'react-promise-tracker';
import PlotComponent from "../Plots/PlotComponent"
import {Spinner} from '../Loading/LoadingComponent'

import { Doughnut, Pie, HorizontalBar  } from 'react-chartjs-2';
import { MDBCol, MDBCollapse, MDBIcon, MDBRow } from "mdbreact";

class GeneExpPlotComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          loading:true,
          filters:{},
          attrs:"",
          chart_type: "pie",
          selector:{
            ra:{},
            ca:{}
          }
        };
      }

      async getDataPlot(url,id,style,attrs,menu,filters){
        this.setState({loading:true});
        const plotData={
          id:id,
          style:style,
          attrs:attrs,
          menu:menu,
          filters:filters
        }
        await trackPromise(
          axios.post(url,plotData)
          .then(response => {
            console.log(response.data)
            this.setState({
              chart:response.data.chart,
              style:response.data.style,
              genes_menu:response.data.genes_menu,
              loading:false});
          })
          .catch(error => {
            toastOnError("Error loading dataset");
          })
        )
      }

    async componentDidMount() {
        this.setState({chart_type:this.props.chart_type,filters:this.props.filters,attrs:this.props.attrs})
        this.getDataPlot(this.props.url,this.props.loom,this.props.chart_type,this.props.attrs,this.props.menu,this.props.filters)
    }
    async componentWillReceiveProps(nextProps) {
      if( nextProps.filters !== this.props.filters ){
        this.setState({filters:nextProps.filters})
        this.getDataPlot(this.props.url,this.props.loom,this.state.chart_type,this.state.attrs,this.props.menu,nextProps.filters)
      }
    }

      
      state = {
        collapseID: ""
      }
      
      toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
      }

      displayPlot = (plot_type,KeysToComponentDisplay,data) =>{
        if(plot_type === "scatter" || plot_type === "hexbin" || plot_type === "violin" ){
          return React.createElement(KeysToComponentDisplay[plot_type],{key:"plot_"+plot_type ,data: data.data, layout:data.layout})
        } else {
          return React.createElement(KeysToComponentDisplay[plot_type],{key:"plot_"+plot_type ,data: data, options:data.options})
        }
        
      }

      callbackUpdateGraph = (attr,chart_type) => { 
        this.setState({collapseID: "",attrs:attr,chart_type:chart_type})
        this.getDataPlot(this.props.url,this.props.loom,chart_type,attr,this.props.menu,this.state.filters)
      }


    render() {
      const KeysToComponentDisplay = {
          pie:Pie,
          doughnut:Doughnut,
          bar:HorizontalBar ,
          scatter:PlotComponent,
          violin:PlotComponent,
          hexbin:PlotComponent,
      };

      return (
        <div>
          <MDBRow>
            <MDBCol md="12">
              Menu
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12">
                display accoding menu selection (use displayPlot & KeysToComponentDisplay)
            </MDBCol>
          </MDBRow>
            
        </div>
      );
    }
  }
  
export default GeneExpPlotComponent;