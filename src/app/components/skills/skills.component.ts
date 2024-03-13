import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent  implements OnInit {
  miPortfolio: any;
  
  constructor(private portfolioService: PortfolioService) {
    
  }
  ngOnInit(): void {
    this.portfolioService.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio = data.skills;
      console.log(this.miPortfolio);
      
    });
    
  }

  selectItem(id:any) {
    this.portfolioService.obtenerOneDatosSkill(id).subscribe(data => {
      console.log(id);

    })
    
  }
}