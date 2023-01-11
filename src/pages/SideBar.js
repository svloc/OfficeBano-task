import React, { useState } from 'react';
import './SideBar.css';
const clients = [
  { id: '1', name: 'A' },
  { id: '2', name: 'B' },
  { id: '3', name: 'C' },
];
export default function SideBar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [client, setClient] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [RFQCode, setRFQCode] = useState('');
  const [client_err, setClient_err] = useState('');
  const [startDate_err, setStartDate_err] = useState('');
  const [endDate_err, setEndDate_err] = useState('');
  const [RFQCode_err, setRFQCode_err] = useState('');
  const today = new Date().toISOString().substring(0, 10);
  const formData={clientName:client,startDate:startDate,endDate:endDate,RFQCode:RFQCode};
  const handleSubmit=(event)=> {
    event.preventDefault();
    if(client===''){
    setClient_err("Please Select Client");
    return;
    }
    //start date 
    if(client && startDate===''){
      setClient_err('')
      setStartDate_err("Please Select Start Date");
      return;
    }
    else if (!/^\d{4}-\d{2}-\d{2}$/.test(startDate)) {
      setStartDate_err('Invalid date format. Please use the format YYYY-MM-DD');
      return;
    }
    else if (new Date(startDate) <= new Date(today)) {
      setStartDate_err('Start date cannot be a past date');
      return;
    }
    else{
      setStartDate_err('');
    }
    
    //end date
    if(startDate && endDate===''){
    setStartDate_err('');
    setEndDate_err("Please Select End Date");
    return;
    }
    else if(!/^\d{4}-\d{2}-\d{2}$/.test(endDate)){
      setEndDate_err('Invalid date format. Please use the format YYYY-MM-DD');
      return;
    }
    else if (new Date(endDate) <= new Date(today)) {
      setEndDate_err('End date cannot be a past date');
      return;
    }
    else if (startDate >= endDate) {
      setEndDate_err('End date should be greater than start date');
      return;
    }
    else{
      setEndDate_err('');
    }

    if(endDate && RFQCode==''){
    setEndDate_err('');
    setRFQCode_err("Please Enter RFQ Code");
    return;
    }
    if(client && startDate && endDate && RFQCode){
      setClient_err('');
      setStartDate_err('');
      setEndDate_err('');
      setRFQCode_err('');
      console.log("formData: ",formData);
      setClient('');
      setStartDate('');
      setEndDate('');
      setRFQCode('');
      setShowSidebar(false);
      alert("suceess");
    }
  }
  return (
    <>
      <button className='btn btn-save' onClick={() => setShowSidebar(true)}>Save</button>
      
      {showSidebar && (
      <>
       <div className="sidebar">
        <div className='sidebar-heading'>
          <h3>WorkOrder</h3>
          <img src="/images/x.svg" alt='close' className='x-img' onClick={() => setShowSidebar(false)}/>
        </div>

        
        <form onSubmit={handleSubmit} className="form">
         <div className='form-holder'>
          <div className="form-group">
           <label>Client:</label>
           <select className="form-control" value={client} onChange={(e) => setClient(e.target.value)} >
            <option value="">Select a client</option>
            {clients.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
           </select>
         { <div><small className='text-red mt-1'>{client_err}</small></div>}
          </div>
        <div className="form-group">
          <label>Date of Commencement</label>
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)} min={today}/>
           <div><small className='text-red mt-1'>{startDate_err}</small></div>
        </div>
        <div className="form-group">
          <label>Date of Completion</label>
          <input type="date" className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)} min={today} />
        <div><small className='text-red mt-1'>{endDate_err}</small></div>
        </div>
        <div className="form-group">
          <label>RFQ Code</label>
          <input
            type="text"
            className="form-control"
            value={RFQCode}
            onChange={(e) => setRFQCode(e.target.value)}/>
        <div><small className='text-red mt-1'>{RFQCode_err}</small></div>
        </div>
         </div>
         <div className='btn-holder'>
        <button className="btn float-right btn-save">Submit</button>
         </div>
        </form>
       </div>
      </>
      )}
    </>
    
  );
}


