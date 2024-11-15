import { Component } from '@angular/core';
import { FaqSService } from '../../../../Services/faqSv/faq-s.service';
import { FAQ } from '../../../../Core/faq';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
 
  faqData: Array<FAQ> = []

  constructor(private faqSv : FaqSService) {
    this.faqData = this.faqSv.fnGetFaqData()
  }


}
