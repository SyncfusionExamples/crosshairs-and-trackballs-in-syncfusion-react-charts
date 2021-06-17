import React from 'react';
import './App.css';
import {john, andrew, thomas} from './data';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, DateTime,
  Inject, Crosshair, Tooltip} from '@syncfusion/ej2-react-charts';

function App() {
  return (
    <div style={{textAlign:"center", margin:'5%'}}>
      <ChartComponent title="Average Sales per Person"
      crosshair={{enable:true, lineType:"Vertical"}}
      tooltip={{enable:true, shared:true}}
      primaryXAxis={{valueType:"DateTime", skeleton: 'y', crosshairTooltip:{enable:true, fill:"green"}}} 
      primaryYAxis={{title: 'Revenue', crosshairTooltip:{enable:true, fill:"green"}}}>
        <Inject services={[LineSeries, DateTime, Crosshair, Tooltip]}></Inject>
        <SeriesCollectionDirective>
          <SeriesDirective type="Line" dataSource={john} marker={{visible:true}}
          xName="date" yName="value"></SeriesDirective>
          <SeriesDirective type="Line" dataSource={andrew} marker={{visible:true}}
          xName="date" yName="value"></SeriesDirective>
          <SeriesDirective type="Line" dataSource={thomas} marker={{visible:true}}
          xName="date" yName="value"></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
export default App;

