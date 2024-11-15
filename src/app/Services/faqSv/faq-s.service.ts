import { Injectable } from '@angular/core';

import { FAQ } from '../../Core/faq';
import faqHome from '../../Data/faq-json/faqHome.json'


@Injectable({
  providedIn: 'root'
})
export class FaqSService {

  constructor() { }

  fnGetFaqData(): Array<FAQ>{
    return faqHome;
  }

}
