import React, { lazy ,Component } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardImg,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CCardTitle,
  CDataTable
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios';

import MainChartExample from '../charts/MainChartExample.js'
import ChartBarSimple from '../charts/ChartBarSimple.js'
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

class DetectCovid extends Component{
  constructor(props) {
    super(props);

    this.state = {
      path: "",
      result: ""
    }

    this.detectCovid = this.detectCovid.bind(this);
    this.onInputchange = this.onInputchange.bind(this);
  }

  onInputchange(event) {
      this.setState({
          [event.target.name]: event.target.value
      });
  }

  detectCovid(event) {

    event.preventDefault();

    let path = '/home/shubham/miniProjectFrontend/public/' + this.state.path.substr(12);
    

      let data = {
        path: path
      } 

      axios.post(
      "http://127.0.0.1:8000/predict/", data).then((response) => {

        console.log(response.data);

        let results = [{"No.":"1","Model Name": "Resnet","Result": response.data.resnet},
                      {"No.":"2","Model Name": "InceptionV3","Result": response.data.inception},
                      {"No.":"3","Model Name": "VGG","Result": response.data.VGG},
                      {"No.":"4","Model Name": "Xception","Result": response.data.xception}];

        this.setState({
          result: results
        });


      }).catch((error) => console.log(error));

  }


  render() {
  return (
    <>
    
      <CCard>
        <CCardBody>
        <CRow>
          <CCol sm="3">
            
            <form>
              <div class="form-group">
                <label for="exampleFormControlFile1"><h4>Upload Chest X-RAY</h4></label>
                <input  onChange={this.onInputchange}  name="path" type="file" class="form-control-file" id="exampleFormControlFile1"/>
              </div>
              <button onClick={this.detectCovid}   class="btn btn-success">Detect Covid</button>
            </form>
    
          </CCol>
        </CRow> 
     </CCardBody>
    </CCard>
    
       <CRow>
            <CCol xs="12" lg="12">
                <CCard>
                  <CCardHeader>
                      Results
                  </CCardHeader>
                    
                    <CCardBody>
                    
                      <CDataTable
                        items={this.state.result}
                        striped
                        tableFilter
                        itemsPerPage={5}
                        pagination
                        sorter
                        hover
                      />

                    </CCardBody>
                </CCard>
              </CCol>
          </CRow>
      


        
    </>
  )
}

}


export default DetectCovid
