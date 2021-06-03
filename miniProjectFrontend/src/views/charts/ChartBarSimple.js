import React from 'react'
import PropTypes from 'prop-types'
import { getColor } from '@coreui/utils'
import { CChartBar } from '@coreui/react-chartjs'

const ChartBarSimple = props => {

  const {
    backgroundColor,
    pointHoverBackgroundColor,
    dataPoints,
    label,
    pointed,
    ...attributes
  } = props

  const defaultDatasets = (()=>{
    return [
      {
        data: dataPoints,
        backgroundColor: getColor(backgroundColor),
        pointHoverBackgroundColor: getColor(pointHoverBackgroundColor),
        label: label,
        barPercentage: 0.5,
        categoryPercentage: 1
      }
    ]
  })()

  const defaultOptions = (()=>{
    return {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }]
      }
    }
  })()

  // render
  return (
    <CChartBar
      {...attributes}
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={label}
    />
  )
}

ChartBarSimple.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  //
  backgroundColor: PropTypes.string,
  pointHoverBackgroundColor: PropTypes.string,
  dataPoints: PropTypes.array,
  label: PropTypes.string,
  pointed: PropTypes.bool
};

ChartBarSimple.defaultProps = {
  backgroundColor: 'rgba(0,0,0,.2)',
  dataPoints: [57.5, 26, 25.3, 21, 16.9, 16.9, 14.3, 13.8, 9.7, 9.4, 8.0, 7.8,7.6,7.5,7,5.7,5.6,4,3.4,3.3,2.9],
  label: ['Maharashtra','Karnataka','Kerala','Tamil Nadu','Andhra Pradesh','Uttar Pradesh','Delhi','West Bengal','Chattisgarh','Rajasthan','Gujarat','Madhya Pradesh','Odhisa','Haryana','Bihar','Telangana','Punjab','Assam','Jharkhand','Uttarakhand','J&K']
};

export default ChartBarSimple
