import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Tracking = () => {
    const [rowData, setRowData] = useState([
        { id: 1, model: 'Logistic Regression', accuracy: 0.9269559381533775, precision: 0.0011297839288236125, recall: 0.8421052631578947, F1Score: 0.002256540441435724, auc: 0.9750564804564305, LogLoss: 0.20617531639077247, mcc: 0.02925802348242799 },
        { id: 1, model: 'Random Forest', accuracy: 0.9999019127023051, precision: 0.0, recall: 0.0, F1Score: 0.0, auc: 0.7880959795480151, LogLoss: 0.0017295609017278365, mcc: 0.0 },
        { id: 1, model: 'Decision Tree', accuracy: 0.9998502878087814, precision: 0.25, recall: 0.2631578947368421, F1Score: 0.2564102564102564, auc: 0.631540224900096, LogLoss: 0.00539617432840887, mcc: 0.25641976598216987 },
        { id: 1, model: 'XGBoost', accuracy: 0.9998915877236003, precision: 0.4, recall: 0.21052631578947367, F1Score: 0.27586206896551724, auc: 0.9555130468903277, LogLoss: 0.0007924293630817979, mcc: 0.2901410589442368 },
        { id: 1, model: 'LightGBM', accuracy: 0.9998348003407243, precision: 0.24, recall: 0.3157894736842105, F1Score: 0.2727272727272727, auc: 0.9279672416070068, LogLoss: 0.0008042195734377176, mcc: 0.2752176246080103 },

    ]);
    const [gridApi, setGridApi] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);

    const heads = [
        { name: 'Model', field: 'model' },
        { name: 'Accuracy', field: 'accuracy' },
        { name: 'Precision', field: 'precision' },
        { name: 'Recall', field: 'recall' },
        { name: 'F1 Score', field: 'F1Score' },
        { name: 'AUC', field: 'auc' },
        { name: 'Log Loss', field: 'LogLoss' },
        { name: 'MCC', field: 'mcc' },

    ];

    const columnDefs = heads.map(item => ({
        headerName: item.name,
        field: item.field,
        headerClass: 'custom-header',
    }));

    const colDef = {
        sortable: true,
        editable: false,
        filter: false,
        floatingFilter: false
    };

    const onGridReady = (params) => {
        setGridApi(params.api);
    };

    const getRowStyle = (params) => {
        return { background: '#0C2766', color: 'white' };
    };

    return (
        <>
            <div className='h-[275px]' style={{ width: '100%' }}>
                <div className="ag-theme-alpine" id='custom-ag-theme' style={{ height: '100%', width: '100%' }}>
                    <AgGridReact
                        className="bg-transparent"
                        onGridReady={onGridReady}
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={colDef}
                        rowSelection="single"
                        masterDetail={true}
                        getRowStyle={getRowStyle}
                        rowClassRules={{
                            'custom-hover': 'false',
                        }}
                    />
                </div>
            </div>
            <div className="p-8 min-h-screen text-white ">

            <h1 className='text-white font-bold text-2xl mb-5 ml-2 mt-20'>XGBoost</h1>
                <div className="flex flex-wrap justify-around mb-8">
                    <div className="w-full min-h-[350px] md:w-[49%] mb-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                        <h1 className=' font-bold text-lg mb-4 text-center'>Experiment #1</h1>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>artifact_uri:</p>
                            <p>file:///home/sagemaker-user/mlruns/0/8b4818a4dcf54e69be38a4ccbdc9b177/artifacts</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>end_time:</p>
                            <p>1719293813523</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>entry_point_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>experiment_id:</p>
                            <p>1</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>lifecycle_stage:</p>
                            <p>active</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_id:</p>
                            <p>8b4818a4dcf54e69be38a4ccbdc9b177</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_name:</p>
                            <p>XGBoost</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_uuid:</p>
                            <p>8b4818a4dcf54e69be38a4ccbdc9b177</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_type:</p>
                            <p>4</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_version:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>start_time:</p>
                            <p>1719293505475</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>status:</p>
                            <p>3</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>tags:</p>
                            <p></p>
                        </div>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>user_id:</p>
                            <p>sagemaker-user</p>
                        </div>

                    </div>

                    <div className="w-full min-h-[350px] md:w-[49%] mb-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                        <h1 className=' font-bold text-lg mb-4 text-center'>Experiment #2</h1>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>artifact_uri:</p>
                            <p>file:///home/sagemaker-user/mlruns/0/8b4818a4dcf54e69be38a4ccbdc9b177/artifacts</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>end_time:</p>
                            <p>1719293873523</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>entry_point_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>experiment_id:</p>
                            <p>2</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>lifecycle_stage:</p>
                            <p>active</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_id:</p>
                            <p>8b4818a4dcf54e69be38a4ccbdc9b177</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_name:</p>
                            <p>XGBoost</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_uuid:</p>
                            <p>8b4818a4dcf54e69be38a4ccbdc9b177</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_type:</p>
                            <p>4</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_version:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>start_time:</p>
                            <p>1719293565475</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>status:</p>
                            <p>3</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>tags:</p>
                            <p></p>
                        </div>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>user_id:</p>
                            <p>sagemaker-user</p>
                        </div>

                    </div>


                </div>

                <h1 className='text-white font-bold text-2xl mb-5 ml-2 mt-20'>LightGBM</h1>
                <div className="flex flex-wrap justify-around mb-8">
                    <div className="w-full min-h-[350px] md:w-[49%] mb-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                        <h1 className=' font-bold text-lg mb-4 text-center'>Experiment #1</h1>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>artifact_uri:</p>
                            <p>file:///home/sagemaker-user/mlruns/0/998fe1bc3e56443aa70798b88beb914b/artifacts</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>end_time:</p>
                            <p>1719297418489</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>entry_point_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>experiment_id:</p>
                            <p>1</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>lifecycle_stage:</p>
                            <p>active</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_id:</p>
                            <p>998fe1bc3e56443aa70798b88beb914b</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_name:</p>
                            <p>LightGBM</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_uuid:</p>
                            <p>998fe1bc3e56443aa70798b88beb914b</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_type:</p>
                            <p>4</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_version:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>start_time:</p>
                            <p>1719297396955</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>status:</p>
                            <p>3</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>tags:</p>
                            <p></p>
                        </div>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>user_id:</p>
                            <p>sagemaker-user</p>
                        </div>

                    </div>
                    <div className="w-full min-h-[350px] md:w-[49%] mb-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                        <h1 className=' font-bold text-lg mb-4 text-center'>Experiment #2</h1>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>artifact_uri:</p>
                            <p>file:///home/sagemaker-user/mlruns/0/998fe1bc3e56443aa70798b88beb914b/artifacts</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>end_time:</p>
                            <p>1719297424489</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>entry_point_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>experiment_id:</p>
                            <p>2</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>lifecycle_stage:</p>
                            <p>active</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_id:</p>
                            <p>998fe1bc3e56443aa70798b88beb914b</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_name:</p>
                            <p>LightGBM</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_uuid:</p>
                            <p>998fe1bc3e56443aa70798b88beb914b</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_type:</p>
                            <p>4</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_version:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>start_time:</p>
                            <p>1719297456955</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>status:</p>
                            <p>3</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>tags:</p>
                            <p></p>
                        </div>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>user_id:</p>
                            <p>sagemaker-user</p>
                        </div>

                    </div>

                </div>

                <h1 className='text-white font-bold text-2xl mb-5 ml-2 mt-20'>Random Forest</h1>
                <div className="flex flex-wrap justify-around mb-8">
                    <div className="w-full min-h-[350px] md:w-[49%] mb-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                        <h1 className=' font-bold text-lg mb-4 text-center'>Experiment #1</h1>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>artifact_uri:</p>
                            <p>file:///home/sagemaker-user/mlruns/0/01da2978fe0d438fb3315395e3451b5c/artifacts</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>end_time:</p>
                            <p>1719292907078</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>entry_point_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>experiment_id:</p>
                            <p>1</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>lifecycle_stage:</p>
                            <p>active</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_id:</p>
                            <p>01da2978fe0d438fb3315395e3451b5c</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_name:</p>
                            <p>Random-Forest</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_uuid:</p>
                            <p>01da2978fe0d438fb3315395e3451b5c</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_type:</p>
                            <p>4</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_version:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>start_time:</p>
                            <p>1719292754687</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>status:</p>
                            <p>4</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>tags:</p>
                            <p></p>
                        </div>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>user_id:</p>
                            <p>sagemaker-user</p>
                        </div>

                    </div>
                    <div className="w-full min-h-[350px] md:w-[49%] mb-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                        <h1 className=' font-bold text-lg mb-4 text-center'>Experiment #2</h1>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>artifact_uri:</p>
                            <p>file:///home/sagemaker-user/mlruns/0/01da2978fe0d438fb3315395e3451b5c/artifacts</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>end_time:</p>
                            <p>1719292967078</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>entry_point_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>experiment_id:</p>
                            <p>2</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>lifecycle_stage:</p>
                            <p>active</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_id:</p>
                            <p>01da2978fe0d438fb3315395e3451b5c</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_name:</p>
                            <p>Random-Forest</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_uuid:</p>
                            <p>01da2978fe0d438fb3315395e3451b5c</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_type:</p>
                            <p>4</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_version:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>start_time:</p>
                            <p>1719292760687</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>status:</p>
                            <p>4</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>tags:</p>
                            <p></p>
                        </div>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>user_id:</p>
                            <p>sagemaker-user</p>
                        </div>

                    </div>

                </div>

                <h1 className='text-white font-bold text-2xl mb-5 ml-2 mt-20'>Decision Tree</h1>
                <div className="flex flex-wrap justify-around mb-8">
                    <div className="w-full min-h-[350px] md:w-[49%] mb-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                        <h1 className=' font-bold text-lg mb-4 text-center'>Experiment #1</h1>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>artifact_uri:</p>
                            <p>file:///home/sagemaker-user/mlruns/0/f2cff3ff7db24f96b20213823d452a69/artifacts</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>end_time:</p>
                            <p>1719297082867</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>entry_point_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>experiment_id:</p>
                            <p>1</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>lifecycle_stage:</p>
                            <p>active</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_id:</p>
                            <p>f2cff3ff7db24f96b20213823d452a69</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_name:</p>
                            <p>Decision-Tree</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_uuid:</p>
                            <p>f2cff3ff7db24f96b20213823d452a69</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_type:</p>
                            <p>4</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_version:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>start_time:</p>
                            <p>1719297060225</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>status:</p>
                            <p>3</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>tags:</p>
                            <p></p>
                        </div>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>user_id:</p>
                            <p>sagemaker-user</p>
                        </div>

                    </div>

                    <div className="w-full min-h-[350px] md:w-[49%] mb-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                        <h1 className=' font-bold text-lg mb-4 text-center'>Experiment #2</h1>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>artifact_uri:</p>
                            <p>file:///home/sagemaker-user/mlruns/0/f2cff3ff7db24f96b20213823d452a69/artifacts</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>end_time:</p>
                            <p>1719297142867</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>entry_point_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>experiment_id:</p>
                            <p>2</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>lifecycle_stage:</p>
                            <p>active</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_id:</p>
                            <p>f2cff3ff7db24f96b20213823d452a69</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_name:</p>
                            <p>Decision-Tree</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_uuid:</p>
                            <p>f2cff3ff7db24f96b20213823d452a69</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_type:</p>
                            <p>4</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_version:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>start_time:</p>
                            <p>1719297120225</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>status:</p>
                            <p>3</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>tags:</p>
                            <p></p>
                        </div>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>user_id:</p>
                            <p>sagemaker-user</p>
                        </div>

                    </div>
                </div>

                <h1 className='text-white font-bold text-2xl mb-5 ml-2 mt-20'>Logistic Regression</h1>
                <div className="flex flex-wrap justify-around mb-8">
                    <div className="w-full min-h-[350px] md:w-[49%] mb-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                        <h1 className=' font-bold text-lg mb-4 text-center'>Experiment #1</h1>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>artifact_uri:</p>
                            <p>file:///home/sagemaker-user/mlruns/0/362f124171a04df3b33cd357e1a17128/artifacts</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>end_time:</p>
                            <p>1719292754685</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>entry_point_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>experiment_id:</p>
                            <p>1</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>lifecycle_stage:</p>
                            <p>active</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_id:</p>
                            <p>362f124171a04df3b33cd357e1a17128</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_name:</p>
                            <p>Logistic-Regression</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_uuid:</p>
                            <p>362f124171a04df3b33cd357e1a17128</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_type:</p>
                            <p>4</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_version:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>start_time:</p>
                            <p>1719292726120</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>status:</p>
                            <p>3</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>tags:</p>
                            <p></p>
                        </div>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>user_id:</p>
                            <p>sagemaker-user</p>
                        </div>

                    </div>

                    <div className="w-full min-h-[350px] md:w-[49%] mb-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                        <h1 className=' font-bold text-lg mb-4 text-center'>Experiment #2</h1>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>artifact_uri:</p>
                            <p>file:///home/sagemaker-user/mlruns/0/362f124171a04df3b33cd357e1a17128/artifacts</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>end_time:</p>
                            <p>1719292814656</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>entry_point_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>experiment_id:</p>
                            <p>2</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>lifecycle_stage:</p>
                            <p>active</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_id:</p>
                            <p>362f124171a04df3b33cd357e1a17128</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_name:</p>
                            <p>Logistic-Regression</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>run_uuid:</p>
                            <p>362f124171a04df3b33cd357e1a17128</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_name:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_type:</p>
                            <p>4</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>source_version:</p>
                            <p></p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>start_time:</p>
                            <p>1719292786182</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>status:</p>
                            <p>3</p>
                        </div>

                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>tags:</p>
                            <p></p>
                        </div>
                        <div className='text-white flex gap-3 text-sm'>
                            <p className=' font-medium'>user_id:</p>
                            <p>sagemaker-user</p>
                        </div>

                    </div>
                </div>


            </div>

        </>
    );
};

export default Tracking;
