import { Component, OnInit } from '@angular/core';
import { OpportunityService } from '../opportunity.service';
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-panel-negotiation',
  templateUrl: './panel-negotiation.component.html',
  styleUrls: ['./panel-negotiation.component.css']
})
export class PanelNegotiationComponent implements OnInit {

  opportunity = {};
  opportunities = [];

  constructor(
    private opportunityService: OpportunityService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.opportunityService.list().subscribe(resp => this.opportunities = <any> resp)
  }

  add() {
    this.opportunityService.add(this.opportunity).subscribe(() => {
      this.opportunity = {};
      this.fetch();

      this.messageService.add({
        severity: 'success',
        summary: 'Opportunity successfully added'
      });
    }, 
    resposta => {
      let msg = 'Unexpected error. Try again';

      if(resposta.error.message) {
        msg = resposta.error.message;
      }

      this.messageService.add({
        severity: 'error',
        summary: msg
      });
    });
  }

}
