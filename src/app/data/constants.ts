export const SERVER_URL = "http://localhost:8000/";
export const SERVER_API_URL = "http://localhost:8000/api/";
export const SITE_HEADER = 'डेमो नगरपालिकाको विद्यालय निकासा प्रणाली';

export const USER_ROLES = {
  1:'account_dataentry',
  2:'account_headteacher',
  3:'account_section',
  4:'administrativeofficer',
  5:'dataentry',
  6:'headteacher',
  7:'municipalitydataentry',
  8:'municipalitydemo',
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
