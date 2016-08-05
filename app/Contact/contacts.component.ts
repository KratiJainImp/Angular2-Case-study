/**
 * Created by abc on 17-Jul-16.
 */
import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';

@Component({
    moduleId: module.id,
    selector: 'contact-grid',
    templateUrl: 'contact.component.html',
    directives: [AgGridNg2]
})

export class ContactsComponent {

    private rowData;
    private columnDefs;
    private gridOptions;
    private testTwoWay;
    private iteratorI=0;
    private searchText:string;
    constructor() {
        this.testTwoWay="nothing";
        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowHeight = 120;
        this.gridOptions.enableSorting = true;
        this.gridOptions.enableFilter = true;
        this.gridOptions.quickFilterText=this.searchText;
        this.rowData = [
            {name: "Tari", address: "Vijay Nagar", number: "+91568985", email: "tar@upd"},
            {name: "krati", address: "Nanda Nagar", number: "+96585", email: "kj@69"},
            {name: "ashish", address: "AB Road", number: "+32656", email: "psycho@sharma"},
            {name: "jd", address: "Gaav", number: "+565656", email: "ddddddd"},
        ];

        this.columnDefs = [
            {
                headerName: 'Details', field: 'userDetail.name', sort: 'asc', comparator: this.compareDetails, filter: 'text',
                filterParams: {apply: true, newRowsAction: 'keep'},
                cellRenderer: function (params:any, index:any) {
                    return `<div><span>${params.data.name}</span><br>
                    <span>${params.data.address}</span><br>
                    <span>${params.data.number}</span><br>
                    <span>${params.data.email}</span></div>`
                }
            },

            {
                headerName: 'Action', sort: 'asc',
                cellRenderer: function (params:any, index:any) {
                    return `<span><button (click)="console.log('dd')" >Read</button></span>
                                                  <span><button (click)="deleteContact()">Delete</button></span>`
                }

            }

        ];

    }

    readContact() {
        console.log("read");
    }

    deleteContact() {
        console.log("delete");
    }

    searchGrid(value){
        this.searchText=value;
        /*console.log(this.searchText);
        this.iteratorI++;
        console.log("updateing");
        this.rowData.push({name: "Tarsdfdasf", address: "Vijay asdfdsafNagar", number: "+9156sdf8985", email: "tar@dfsafupd"});
        this.testTwoWay="new"+this.iteratorI;*/

    }
    compareDetails(valueA,valueB,rowA,rowB,inverter) {
        if(rowA.data.name.toLowerCase()>rowB.data.name.toLowerCase()){
            return 1;
        }
        else{
            return -1;
        }

    }
}