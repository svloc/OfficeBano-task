import React, { useState } from 'react';
import './Overview.css';
const data=[
{id:1,packageName:"Civil 1",rate:"567.80",total:"2,98,6792"},
{id:2,packageName:"Civil 2",rate:"567.80",total:"2,98,6792"},
{id:3,packageName:"Civil 3",rate:"567.80",total:"2,98,6792"},
]


export default function Overview(){
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [expandedRowId, setExpandedRowId] = useState(null);
  const [expandedRowId_2, setExpandedRowId_2] = useState(null);

  const handleSelect = (key, checked) => {
    const nextSelectedKeys = checked
      ? [...selectedKeys, key]
      : selectedKeys.filter((k) => k !== key);
    setSelectedKeys(nextSelectedKeys);
  };

  const handleSelectAll = () => {
    setSelectedKeys(selectedKeys.length === data.length? []: data.map((record) => record.id));
  };


  const handleButtonClick = (rowId) => {
    setExpandedRowId(rowId === expandedRowId ? null : rowId);
  }
  const handleExpand_2=(rowId)=>{
    setExpandedRowId_2(rowId===expandedRowId_2 ? null:rowId );
  }

  return (
    
    <table>
      <thead className='bg-thead'>
        <tr>
          <th className='th-checkbox'><input className='form-input' type="checkbox" onChange={(e) => handleSelectAll(e.target.checked)} checked={selectedKeys.length === data.length}/>Package</th>
          <th>Rate</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <tr key={item.id}>
              <td className='th-checkbox'><input className='form-input' type="checkbox" onChange={(e) => handleSelect(item.id, e.target.checked)}checked={selectedKeys.includes(item.id)}/>{item.packageName}</td>
              <td>{item.rate}</td>
              <td>{item.total}</td>
              <td onClick={() => handleButtonClick(item.id)}> {expandedRowId === item.id ? 
              <img src="/images/minus.svg" width='23' height='23' alt='Expand'/>:
              <img src="/images/plus.svg" alt="Collapse" width='23' height='23'/>} </td>
            </tr>
            {item.id === expandedRowId && (
              <tr key={item.id +"1"}>
                <td>{item.packageName}</td>
                <td>{item.rate}</td>
                <td>{item.total}</td>
                <td onClick={() => handleExpand_2(item.id)}>{expandedRowId === item.id && item.id === expandedRowId_2 ? 
                <img src="/images/chevron-up.svg" width='23' height='23' alt='Expand'/>:
                <img src="/images/chevron-down.svg" alt="Collapse" width='23' height='23'/>} </td>
              </tr>
            )}
            {item.id === expandedRowId && item.id === expandedRowId_2 && (
              <tr key={item.id+"2"}>
                <td>{item.packageName}</td>
                <td>{item.rate}</td>
                <td>{item.total}</td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};
