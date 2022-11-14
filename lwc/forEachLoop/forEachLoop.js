import { LightningElement } from 'lwc';

export default class ForEachLoop extends LightningElement {

    contacts = [
        {
            Id:1,
            Name : "Nurdan",
            Title:"Salesforce Developer"
        },
        {
            Id:2,
            Name : "Burak",
            Title:"Salesforce Administrator"
        },
        {
            Id:3,
            Name : "Enes",
            Title:"Junior Salesforce Administrator"
        },
    ]
}