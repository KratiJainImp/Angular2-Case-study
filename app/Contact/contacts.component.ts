/**
 * Created by abc on 17-Jul-16.
 */
import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions, ICellRenderer} from 'ag-grid/main';
import {HeroService} from '../hero.service';

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
    private searchText:string;

    constructor() {
        this.testTwoWay = "nothing";
        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowHeight = 120;
        this.gridOptions.enableSorting = true;
        this.gridOptions.enableFilter = true;
        this.gridOptions.quickFilterText = this.searchText;
        this.rowData = [
            {name: "Tari", address: "Vijay Nagar", number: "+91568985", email: "tar@upd"},
            {name: "krati", address: "Nanda Nagar", number: "+96585", email: "kj@69"},
            {name: "ashish", address: "AB Road", number: "+32656", email: "psycho@sharma"},
            {name: "jd", address: "Gaav", number: "+565656", email: "ddddddd"},
        ];

        this.columnDefs = [
            {
                headerName: 'Details',
                sort: 'asc',
                comparator: this.compareDetails,
                filter: 'text',
                filterParams: {apply: true, newRowsAction: 'keep'},
                cellRenderer: function (params:any, index:any, a:any, b:any, c:any) {
                    return `<div><span>${params.data.name}</span><br>
                    <span>${params.data.address}</span><br>
                    <span>${params.data.number}</span><br>
                    <span>${params.data.email}</span></div>`
                }
            },

            {
                headerName: 'Action', sort: 'asc',
                cellRenderer: function (params:any) {
                    let gui = document.createElement('span');
                    gui.innerHTML = `<button class="read-btn" (click)="readData()" >Read</button></span>
                      <span><button class="delete-btn" (click)="readData()">Delete</button></span>`;
                    gui.querySelectorAll(".read-btn")[0].addEventListener('click',function () {
                        console.log("read",params.data);
                    });
                    gui.querySelectorAll(".delete-btn")[0].addEventListener('click',function () {
                        console.log("delete",params.data);
                    });

                    return gui;
                }

            }

        ];

    }

    searchGrid(value) {
        console.log("clicked", this.searchText);
        this.searchText = value;
        console.log("clicked", this.searchText);
        this.gridOptions.setQuickFilte(this.searchText);
        /*console.log(this.searchText);
         this.iteratorI++;
         console.log("updateing");
         this.rowData.push({name: "Tarsdfdasf", address: "Vijay asdfdsafNagar", number: "+9156sdf8985", email: "tar@dfsafupd"});
         this.testTwoWay="new"+this.iteratorI;*/

    }

    compareDetails(valueA, valueB, rowA, rowB, inverter) {
        if (rowA.data.name.toLowerCase() > rowB.data.name.toLowerCase()) {
            return 1;
        }
        else {
            return -1;
        }

    }

}



