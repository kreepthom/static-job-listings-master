import { ImageHeader } from '../atoms/ImageHeader'
import { CardFilter } from '../molecule/CardFilter';
import { MyContextJob } from '../../hooks/useContextJob';
import { Card } from '../molecule/Card';
import { DataJSON } from '../../Data'
import { initialState } from '../../hooks/useContextJob';
import { filterList } from '../../helpers/filterList';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [paramsFilter, setParamsFilter] = useState<any>(initialState.paramsFilter)
  const [handleFilter, setHandleFilter] = useState<boolean>(true)
  const [Data, setData] = useState<any>(DataJSON)

  useEffect(() => {
    if(paramsFilter){
      const newData = filterList(Data, paramsFilter)
      setData(newData);      
    }
  }, [paramsFilter])

  return (
    <MyContextJob.Provider value={{...initialState, setParamsFilter, paramsFilter, setHandleFilter}}>
      <div className="App">
        <ImageHeader />
        {
          handleFilter && <CardFilter />
        }
        <div className='container-main'>
          {Data? Data.map((data: any) => (
              <Card key={data.id} Data={data} />
            )) : <div>No hay na</div>
          }
        </div>
      </div>
    </MyContextJob.Provider>
  );
}

export default App;
