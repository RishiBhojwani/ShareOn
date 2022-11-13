import React from 'react'
import { BarChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'

const barData = {
  labels: ['1 yr', '2 yrs', '5 yrs', '10 yrs'],
  datasets: [
    {
      data: [20, 45, 28, 50],
    },
  ],
};

const chartConfig = {
  backgroundColor: '#0a0442',
  backgroundGradientFrom: "#0a0442",
  backgroundGradientTo: "#0a0442",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
}

function ProjectionsChart() {
  return (
    <BarChart
      data={barData}
      width={Dimensions.get('window').width}
      height={220}
      yAxisLabel={'$'}
      chartConfig={chartConfig}
    />
  )
}

export default ProjectionsChart