export interface GridSettings {
   rows: number;
   page: number;
   sortColumn: string;
   sortDirection: string;
   config: string;
   phoneNumber: string;
   messageContent: string;
   timeFrom: string;
   timeTo: string;
   deliveryStatus: string;
   providerStatus: string;
   smsDirection: string;
   openMrsId: string;
   providerId: string;
   errorMessage: string;
 }
 
 export interface SMSRecord {
   id: number;
   errorMessage: string;
   providerStatus: string;
   openMrsId: string;
   providerId: string;
   deliveryStatus: string;
   messageContent: string;
   timestamp: string;
   config: string;
   smsDirection: string;
   phoneNumber: string;
   modificationDate: string;
   creationDate: string;
   modifiedBy: string;
   creator: string;
 }
 
 export interface SMSRecordResponse {
   pageIndex: number;
   pageSize: number;
   totalRecords: number;
   rows: SMSRecord[];
 }
 