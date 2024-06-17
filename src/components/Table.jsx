import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Modal from 'react-modal';
import axios from 'axios'; // Import axios for API requests
import Chat from './Chat';

const Table = () => {
  const [rowData, setRowData] = useState("");
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [res,setRes]=useState(null)

  const heads = [
    { field: 'LoanNumber', name: 'Loan Number' },
    { field: 'DateApproved', name: 'Date Approved' },
    { field: 'SBAOfficeCode', name: 'SBA Office Code' },
    { field: 'ProcessingMethod', name: 'Processing Method' },
    { field: 'BorrowerName', name: 'Borrower Name' },
    { field: 'BorrowerAddress', name: 'Borrower Address' },
    { field: 'BorrowerCity', name: 'Borrower City' },
    { field: 'BorrowerState', name: 'Borrower State' },
    { field: 'BorrowerZip', name: 'Borrower Zip' },
    { field: 'LoanStatusDate', name: 'Loan Status Date' },
    { field: 'LoanStatus', name: 'Loan Status' },
    { field: 'Term', name: 'Term' },
    { field: 'SBAGuarantyPercentage', name: 'SBA Guaranty Percentage' },
    { field: 'InitialApprovalAmount', name: 'Initial Approval Amount' },
    { field: 'CurrentApprovalAmount', name: 'Current Approval Amount' },
    { field: 'UndisbursedAmount', name: 'Undisbursed Amount' },
    { field: 'FranchiseName', name: 'Franchise Name' },
    { field: 'ServicingLenderLocationID', name: 'Servicing Lender Location ID' },
    { field: 'ServicingLenderName', name: 'Servicing Lender Name' },
    { field: 'ServicingLenderAddress', name: 'Servicing Lender Address'},
    { field: 'ServicingLenderCity', name: 'Servicing Lender City' },
    { field: 'ServicingLenderState', name: 'Servicing Lender State' },
    { field: 'ServicingLenderZip', name: 'Servicing Lender Zip' },
    { field: 'RuralUrbanIndicator', name: 'Rural Urban Indicator' },
    { field: 'HubzoneIndicator', name: 'Hubzone Indicator' },
    { field: 'LMIIndicator', name: 'LMI Indicator'},
    { field: 'BusinessAgeDescription', name: 'Business Age Description' },
    { field: 'ProjectCity', name: 'Project City' },
    { field: 'ProjectCountyName', name: 'Project County Name'},
    { field: 'ProjectState', name: 'Project State' },
    { field: 'ProjectZip', name: 'Project Zip'},
    { field: 'CD', name: 'CD' },
    { field: 'JobsReported', name: 'Jobs Reported'},
    { field: 'NAICSCode', name: 'NAICS Code' },
    { field: 'Race', name: 'Race' },
    { field: 'Ethnicity', name: 'Ethnicity' },
    { field: 'UTILITIES_PROCEED', name: 'Utilities Proceed' },
    { field: 'PAYROLL_PROCEED', name: 'Payroll Proceed'},
    { field: 'MORTGAGE_INTEREST_PROCEED', name: 'Mortgage Interest Proceed' },
    { field: 'RENT_PROCEED', name: 'Rent Proceed' },
    { field: 'REFINANCE_EIDL_PROCEED', name: 'Refinance EIDL Proceed' },
    { field: 'HEALTH_CARE_PROCEED', name: 'Health Care Proceed' },
    { field: 'DEBT_INTEREST_PROCEED', name: 'Debt Interest Proceed' },
    { field: 'BusinessType', name: 'Business Type'},
    { field: 'OriginatingLenderLocationID', name: 'Originating Lender Location ID' },
    { field: 'OriginatingLender', name: 'Originating Lender'},
    { field: 'OriginatingLenderCity', name: 'Originating Lender City' },
    { field: 'OriginatingLenderState', name: 'Originating Lender State' },
    { field: 'Gender', name: 'Gender' },
    { field: 'Veteran', name: 'Veteran' },
    { field: 'NonProfit', name: 'Non-Profit' },
    { field: 'ForgivenessAmount', name: 'Forgiveness Amount'},
    { field: 'ForgivenessDate', name: 'Forgiveness Date' },
    { field: 'ApprovalDiff', name: 'Approval Diff' },
    { field: 'NotForgivenAmount', name: 'Not Forgiven Amount' },
    { field: 'ForgivenPercentage', name: 'Forgiven Percentage'},
    { field: 'TOTAL_PROCEED', name: 'Total Proceed' },
    { field: 'PROCEED_Diff', name: 'Proceed Diff' },
    { field: 'UTILITIES_PROCEED_pct', name: 'Utilities Proceed %' },
    { field: 'PAYROLL_PROCEED_pct', name: 'Payroll Proceed %' },
    { field: 'MORTGAGE_INTEREST_PROCEED_pct', name: 'Mortgage Interest Proceed %' },
    { field: 'RENT_PROCEED_pct', name: 'Rent Proceed %'},
    { field: 'REFINANCE_EIDL_PROCEED_pct', name: 'Refinance EIDL Proceed %' },
    { field: 'HEALTH_CARE_PROCEED_pct', name: 'Health Care Proceed %' },
    { field: 'DEBT_INTEREST_PROCEED_pct', name: 'Debt Interest Proceed %' },
    { field: 'PROCEED_Per_Job', name: 'Proceed Per Job' },
    // { field: 'Label', name: 'Label' }
  ];

  useEffect(() => {
    fetchRowData();
  }, []);

  const fetchRowData = async () => {
    try {
      const response = await axios.get('http://54.234.169.244:8000/api/fileread');
      console.log('Data:', response.data);
  
      if (response.data.payload && response.data.payload.json_data) {
        const parsedData = response.data.payload.json_data;
        if (Array.isArray(parsedData)) {
          setRowData(parsedData); // Set the parsed data to rowData state
        } else {
          console.error('Parsed JSON is not an array:', parsedData);
          setRowData([]); // Set an empty array if the parsed JSON is not an array
        }
      } else {
        console.error('No json_data field in API response:', response.data);
        setRowData([]); // Set an empty array if json_data field is missing
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setRowData([]); // Set an empty array on error
    }
  };
  



  const columnDefs = [

    ...heads.map(item => ({
      headerName: item.name,
      field: item.field,
      headerClass: 'custom-header'
    })),
  ];

  const colDef = {
    sortable: true, editable: false, filter: true, floatingFilter: true
  };

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const onSearch = (e) => {
    setSearchText(e.target.value);
    gridApi.setQuickFilter(e.target.value);
  };

  const onSelectionChange = (event) => {
    console.log(event.api.getSelectedRows());
  };


  const getRes = async (rowData) => {
    console.log("checking--",JSON.stringify(rowData))
    try {
      const response = await axios.post(
        'http://54.234.169.244:8000/api/predict/',
        JSON.stringify(rowData), // Serialize rowData to JSON string
        {
          headers: {
            'Content-Type': 'application/json' // Specify content type as JSON
          }
        }
      );
      console.log('API Response:', response.data.payload);
      setRes(response.data.payload)
      // Handle response data as needed
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  function convertNumbersToStrings(obj) {
    const result = {};
    let count = 0;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (count === Object.keys(obj).length - 1) {
          break; // Skip last iteration
        }
        result[key] = typeof obj[key] === 'number' ? obj[key].toString() : obj[key];
        count++;
      }
    }
    return result;
  }
  

  const onRowClicked = (event) => {
    console.log('Row clicked:', event.data);
    setSelectedRow(event.data);
    setRes(null)
    setIsModalOpen(true);
    const dt=convertNumbersToStrings(event.data)
    getRes(dt);
  };
  

  const getRowStyle = (params) => {
    if (params.data.id === selectedRow) {
      return { background: '#122F6F', color: 'white' };
    }
    return { background: '#0C2766', color: 'white' };
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='rounded-lg md:w-full w-[500px] h-[100vh]'>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={onSearch}
        className='bg-transparent border-2 rounded-xl text-white px-4 outline-none'
        style={{ marginBottom: '10px', padding: '5px' }}
      />
      <div className="ag-theme-alpine" id='custom-ag-theme' style={{ height: '100%', width: '100%' }}>
        <AgGridReact
          className="bg-transparent"
          onGridReady={onGridReady}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={colDef}
          rowSelection="single"
          masterDetail={true}
          onSelectionChanged={onSelectionChange}
          onRowClicked={onRowClicked}
          getRowStyle={getRowStyle}
          rowClassRules={{
            'custom-hover': 'true',
          }}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.0)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            background: 'rgba(26, 74, 185, 0.95)',
            border: 'none',
            width: '35vw',
            borderRadius: 15
          },
        }}
        contentLabel="Row Details Modal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" className="bi bi-x" viewBox="0 0 16 16" onClick={closeModal} className="absolute top-1 right-2 text-lg cursor-pointer">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
        <h2 className='mt-2'>Selected Row's Results</h2>
        {selectedRow && (
          <>
            <div className='flex flex-wrap mt-6 gap-6 my-10 justify-between'>
              <div className='flex flex-col justify-center items-center text-sm'>
                <h4 className='font-bold'>XG Boost</h4>
                <p className='font-semibold'>{res===null? "___":res.XGBoost_model}</p>
              </div>
              <div className='flex flex-col justify-center items-center text-sm'>
                <h4 className='font-bold'>Light GBM</h4>
                <p className='font-semibold'>{res===null? "___":res.LightGBM}</p>
              </div>
              <div className='flex flex-col justify-center items-center text-sm'>
                <h4 className='font-bold'>Logistic Regression Model</h4>
                <p className='font-semibold'>{res===null? "___":res.LogisticRegression_model}</p>
              </div>
              <div className='flex flex-col justify-center items-center text-sm'>
                <h4 className='font-bold'>Randome Forest</h4>
                <p className='font-semibold'>{res===null? "___":res.RandomForest_model}</p>
              </div>
              {/* <div className='flex flex-col justify-center items-center text-sm'>
                <h4 className='font-bold'>LLM</h4>
                <p className='font-semibold'>{res===null? "___":res.}</p>
              </div> */}
            </div>

            <div className='bg-white rounded-lg ml-auto cursor-pointer p-2 text-[#092053] flex w-fit gap-x-3'
              onClick={() => {
                setIsChatOpen(true);
                closeModal();
              }}>
              Chatbot
              <svg width="25" height="25" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.69596 41.4223C6.83565 40.9081 6.52691 40.1932 6.23226 39.6779C6.14051 39.5242 6.04099 39.3753 5.93409 39.2318C3.40696 35.3993 2.06001 30.9094 2.06017 26.3187C2.01909 13.1415 12.9459 2.44836 26.4576 2.44836C38.2413 2.44836 48.0776 10.6118 50.3761 21.4482C50.7205 23.0548 50.8944 24.6932 50.895 26.3363C50.895 39.5323 40.3896 50.3933 26.8779 50.3933C24.7296 50.3933 21.83 49.8533 20.2488 49.4108C18.6675 48.9682 17.0886 48.3812 16.6813 48.2239C16.2647 48.0638 15.8222 47.9814 15.3759 47.9809C14.8884 47.9791 14.4055 48.0761 13.9566 48.2662L5.99396 51.1399C5.81951 51.2151 5.63467 51.2634 5.44574 51.2832C5.29665 51.2827 5.14913 51.2527 5.01173 51.1948C4.87432 51.1369 4.74977 51.0524 4.64528 50.946C4.54079 50.8397 4.45844 50.7137 4.403 50.5753C4.34756 50.4369 4.32013 50.2888 4.3223 50.1398C4.3321 50.0089 4.35571 49.8794 4.39274 49.7535L6.69596 41.4223Z" stroke="#092053" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" />
              </svg>
            </div>
          </>
        )}
      </Modal>
      <Chat isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default Table;




