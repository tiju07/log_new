import { Component, OnInit } from '@angular/core';
import { AgentsService } from '../../../services/agents.service';
import { Agent } from '../../../interfaces/agent';

@Component({
  selector: 'app-view-single-agent',
  templateUrl: './view-single-agent.component.html',
  styleUrl: './view-single-agent.component.css'
})
export class ViewSingleAgentComponent implements OnInit{
    constructor(private agentsService: AgentsService){}
    activeIndex = 0;
    agent!: Agent;
    
    ngOnInit(): void {
        this.agent = this.agentsService.getAgent();
    }

    increment() {
        if (this.activeIndex < 10) {
            this.activeIndex++;
        }
    }
    decrement() {
        if (this.activeIndex > 0) {
            this.activeIndex--;
        }
    }

}
