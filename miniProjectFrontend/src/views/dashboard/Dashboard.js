import React, { lazy } from 'react'
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
  CCardTitle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'
import ChartBarSimple from '../charts/ChartBarSimple.js'
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <>

      <CCard>
        <CCardImg src="covid.jpg"/>
       
          <CRow>
            <CCol sm="12">
            <CCardBody>
              <p>Coronavirus disease 2019 (COVID-19) is a contagious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The first known case was identified in Wuhan, China in December of 2019. The disease has since spread worldwide, leading to an ongoing pandemic.</p>
              <ul>
                <li>
                  Wash your hands regularly for 20 seconds.
                </li>
                <li>
                  Cover your nose and mouth with a disposable tissue.
                </li>
                <li>
                  Avoid close contact (1 meter or 3 feet) with people.
                </li>
                <li>
                  Stay home and self-isolate from others in the household.
                </li>
                <li>
                  Protect yourself and help prevent spreading the virus.
                </li>  
                 
              </ul>    

            </CCardBody>
            </CCol>
          </CRow>
        
      </CCard>  

      <WidgetsDropdown />



      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Total Cases in Lakhs</h4>
            </CCol>
            
          </CRow>
          <ChartBarSimple style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        
      </CCard>


        
    </>
  )
}

export default Dashboard
