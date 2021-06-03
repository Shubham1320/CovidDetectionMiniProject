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

      <CRow>
        <CCol sm="4">
          <CCard>
            <CCardImg style={{height: "200px"}} src="fever.jpg"/>
            <CCardBody><h3>Fever</h3></CCardBody>
          </CCard>  
        </CCol>
        <CCol sm="4">
          <CCard>
            <CCardImg style={{height: "200px"}} src="cough.jpg"/>
            <CCardBody><h3>Cough</h3></CCardBody>
          </CCard>  
        </CCol>
        <CCol sm="4">
          <CCard >
            <CCardImg  style={{height: "200px"}} src="sore-throat.jpeg"/>
            <CCardBody><h3>Sore Throat</h3></CCardBody>
          </CCard>  
        </CCol>
      </CRow>    

      <CRow>
        <CCol sm="4">
          <CCard>
            <CCardImg style={{height: "200px"}} src="fatigue.jpg"/>
            <CCardBody><h3>Fatigue</h3></CCardBody>
          </CCard>  
        </CCol>
        <CCol sm="4">
          <CCard>
            <CCardImg style={{height: "200px"}} src="headache.jpg"/>
            <CCardBody><h3>Headache</h3></CCardBody>
          </CCard>  
        </CCol>
        <CCol sm="4">
          <CCard >
            <CCardImg  style={{height: "200px"}} src="runny-nose.jpg"/>
            <CCardBody><h3>Runny Nose</h3></CCardBody>
          </CCard>  
        </CCol>
      </CRow> 

      


        
    </>
  )
}

export default Dashboard
