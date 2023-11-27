/// <reference types="cypress" />

//page imports
import { AppPage1 } from "./pages/applicationPage1";

//page instances
const appPage1 = new AppPage1();

describe('Application - End to End Flow', () => {
    it('Validate Home Page', () => {
      appPage1.loadWebsite();
      appPage1.validatePageElements();
    })
  });
  