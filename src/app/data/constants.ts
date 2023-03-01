export const SERVER_URL = "http://localhost:8000/";
export const SERVER_API_URL = "http://localhost:8000/api/";
export const SITE_HEADER = 'डेमो नगरपालिकाको विद्यालय निकासा प्रणाली';

export const USER_ROLES = {
  account_dataentry:'account_dataentry',
  account_headteacher:'account_headteacher',
  account_section:'account_section',
  administrativeofficer:'administrativeofficer',
  dataentry:'dataentry',
  headteacher:'headteacher',
  municipalitydataentry:'municipalitydataentry',
  municipalitydemo:'municipalitydemo',
}

//ag-grid table default config
export const TABLE_CONFIG = {
    style: 'width : 100%; height: 800px',
    paginationSize : 100,
    class : 'ag-theme-alpine',
    gridOptions : { 
        defaultColDef: {
        resizable: true,
        wrapHeaderText: true,
        autoHeaderHeight: true,
      },
    }
}
