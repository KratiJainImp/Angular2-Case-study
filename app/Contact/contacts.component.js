"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by abc on 17-Jul-16.
 */
var core_1 = require('@angular/core');
var main_1 = require('ag-grid-ng2/main');
var ContactsComponent = (function () {
    function ContactsComponent() {
        this.iteratorI = 0;
        this.testTwoWay = "nothing";
        this.gridOptions = {};
        this.gridOptions.rowHeight = 120;
        this.gridOptions.enableSorting = true;
        this.gridOptions.enableFilter = true;
        this.gridOptions.quickFilterText = this.searchText;
        this.rowData = [
            { name: "Tari", address: "Vijay Nagar", number: "+91568985", email: "tar@upd" },
            { name: "krati", address: "Nanda Nagar", number: "+96585", email: "kj@69" },
            { name: "ashish", address: "AB Road", number: "+32656", email: "psycho@sharma" },
            { name: "jd", address: "Gaav", number: "+565656", email: "ddddddd" },
        ];
        this.columnDefs = [
            {
                headerName: 'Details', field: 'userDetail.name', sort: 'asc', comparator: this.compareDetails, filter: 'text',
                filterParams: { apply: true, newRowsAction: 'keep' },
                cellRenderer: function (params, index) {
                    return "<div><span>" + params.data.name + "</span><br>\n                    <span>" + params.data.address + "</span><br>\n                    <span>" + params.data.number + "</span><br>\n                    <span>" + params.data.email + "</span></div>";
                }
            },
            {
                headerName: 'Action', sort: 'asc',
                cellRenderer: function (params, index) {
                    return "<span><button (click)=\"console.log('dd')\" >Read</button></span>\n                                                  <span><button (click)=\"deleteContact()\">Delete</button></span>";
                }
            }
        ];
    }
    ContactsComponent.prototype.readContact = function () {
        console.log("read");
    };
    ContactsComponent.prototype.deleteContact = function () {
        console.log("delete");
    };
    ContactsComponent.prototype.searchGrid = function (value) {
        this.searchText = value;
        /*console.log(this.searchText);
        this.iteratorI++;
        console.log("updateing");
        this.rowData.push({name: "Tarsdfdasf", address: "Vijay asdfdsafNagar", number: "+9156sdf8985", email: "tar@dfsafupd"});
        this.testTwoWay="new"+this.iteratorI;*/
    };
    ContactsComponent.prototype.compareDetails = function (valueA, valueB, rowA, rowB, inverter) {
        if (rowA.data.name.toLowerCase() > rowB.data.name.toLowerCase()) {
            return 1;
        }
        else {
            return -1;
        }
    };
    ContactsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contact-grid',
            templateUrl: 'contact.component.html',
            directives: [main_1.AgGridNg2]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map