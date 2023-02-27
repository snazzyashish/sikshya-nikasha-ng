export const SERVER_URL = "http://localhost:8000/";
export const SERVER_API_URL = "http://localhost:8000/api";
export const SITE_HEADER = 'डेमो नगरपालिकाको विद्यालय निकासा प्रणाली';

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
