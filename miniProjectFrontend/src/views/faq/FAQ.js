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
        <CCol sm="12">
          <CCard>
            <CCardTitle style={{marginLeft:"20px",marginTop:"20px"}}>How does the virus spread ?</CCardTitle>
            <CCardBody><p>COVID-19 is thought to spread mainly through close contact from person to person, including between people who are physically near each other (within about 6 feet). People who are infected but do not show symptoms can also spread the virus to others. Cases of reinfection with COVID-19  have been reported but are rare. We are still learning about how the virus spreads and the severity of illness it causes.</p></CCardBody>
          </CCard>  
        </CCol>
     </CRow>   

      <CRow>
        <CCol sm="12">
          <CCard>
            <CCardTitle style={{marginLeft:"20px",marginTop:"20px"}}>Am I at risk from mails,packages and online products ?</CCardTitle>
            <CCardBody><p>Coronaviruses are thought to be spread most often by respiratory droplets. Although the virus can survive for a short period on some surfaces, it is unlikely to be spread from domestic or international mail, products, or packaging. However, it may be possible that people can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes, but this is not thought to be the main way the virus spreads.</p></CCardBody>
          </CCard>  
        </CCol>
     </CRow>  

      <CRow>
        <CCol sm="12">
          <CCard>
            <CCardTitle style={{marginLeft:"20px",marginTop:"20px"}}>Is it ok for me to donate blood ?</CCardTitle>
            <CCardBody><p>In healthcare settings across the United States, donated blood is a lifesaving, essential part of caring for patients. The need for donated blood is constant, and blood centers are open and in urgent need of donations. CDC encourages people who are well to continue to donate blood if they are able, even if they are practicing social distancing because of COVID-19. CDC is supporting blood centers by providing recommendations that will keep donors and staff safe. Examples of these recommendations include spacing donor chairs 6 feet apart, thoroughly adhering to environmental cleaning practices, and encouraging donors to make donation appointments ahead of time.</p></CCardBody>
          </CCard>  
        </CCol>
     </CRow>  

      <CRow>
        <CCol sm="12">
          <CCard>
            <CCardTitle style={{marginLeft:"20px",marginTop:"20px"}}>What is the risk of children getting infected ?</CCardTitle>
            <CCardBody><p> Children can be infected with the virus that causes COVID-19 and can get sick with COVID-19. Most children with COVID-19 have mild symptoms or they may have no symptoms at all (“asymptomatic”). Fewer children have been sick with COVID-19 compared to adults. Babies younger than 1 and children with certain underlying medical conditions may be more likely to have serious illness from COVID-19. Some children have developed a rare but serious disease that is linked to COVID-19 called multisystem inflammatory syndrome (MIS-C).</p></CCardBody>
          </CCard>  
        </CCol>
     </CRow>  

      <CRow>
        <CCol sm="12">
          <CCard>
            <CCardTitle style={{marginLeft:"20px",marginTop:"20px"}}>Is at-home specimen collection or testing available ?</CCardTitle>
            <CCardBody><p>Yes. At-home testing and collection allow you to collect a specimen at home and either send it to a testing facility or preform the test at home.

You and your healthcare provider might consider either an at-home collection kit or an at-home test if you have signs and symptoms of COVID-19 or if you can’t get testing at a local healthcare facility.</p></CCardBody>
          </CCard>  
        </CCol>
     </CRow>  
      


        
    </>
  )
}

export default Dashboard
