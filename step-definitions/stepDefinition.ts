import { Given, Then, When } from "@cucumber/cucumber";
import { FrameLocator } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import  PIMPage  from "../pages/PIMPage";
import { CommonUtils } from "../utils/CommonUtils";
import  AssertUtil  from "../utils/AssertUtil";

let loginPage:LoginPage=new LoginPage();
let pimPage:PIMPage=new PIMPage();

 let pimFrame:FrameLocator;

//login the application
Given('log in to the application', async ()=> {

    await loginPage.login();
 
});

//verify the welcome selenium
Then('verify Welcome selenium', async ()=> {

    await AssertUtil.assertEquals(await CommonUtils.getElementText(loginPage. getWelcomePage()),"Welcome krishna");
    
 
});

//mouse hover on pim

When('move the mouse to the PIM', async ()=> {

    await CommonUtils.movetoElement(pimPage.getPim());
    
  
 
});

//click on add employee button
When('click on the Add Employee button', async ()=> {

    await CommonUtils.clickElement( pimPage.getaddEmp());
 
  
});

//switch to frame
When('switch to the iframe', async ()=> {

     pimFrame=await CommonUtils.switchToFrameByIdorName(pimPage.getIframe());
  
  
});

//verify add employee text
Then('verify add Employee', async ()=> {

    await AssertUtil.assertEquals(await CommonUtils.getElementTextFrame(pimFrame,pimPage.getaddEmpText()),"PIM : Add Employee");
     
  
 
});


//enter first name
Then('enter the first name {string} into the first name field', async (firstname:string)=> {
  
     await CommonUtils.enterValueInFrame(pimFrame,pimPage.getFirstname(),firstname);
  
});

//enter last name
Then('enter the last name {string} into the last name field', async (lastname:string) =>{


     await CommonUtils.enterValueInFrame(pimFrame,pimPage.getLastname(),lastname);

 
});


//click on save button
Then('click the Save button to add the new employee', async ()=> {

    await CommonUtils.clickElementInFrame( pimFrame,pimPage.getSave());
    
  
  
});

//click on edit button
When('click the Edit button', async ()=> {

    await CommonUtils.clickElementInFrame( pimFrame,pimPage.getEdit());
  
  
});

Then('click on again save button', async ()=> {

    await CommonUtils.clickElementInFrame( pimFrame,pimPage.getFrameSave());
  
  
});




When('click the Back button to return to the previous page', async ()=> {

    await CommonUtils.clickElementInFrame( pimFrame,pimPage.getBack());
  
  
});

When('select the dropdown value', async ()=> {

    await CommonUtils.selectDropdownValue(pimFrame,pimPage.getsearchByDropdown(),"Emp. First Name");
    
 
 
});

When('enter employee first name in search field', async ()=> {
  
    await CommonUtils.enterValueInFrame(pimFrame,pimPage.getSearchFor(),"Hanu");
 
});

When('click the search button', async ()=> {

    await CommonUtils.clickElementInFrame( pimFrame,pimPage.getSearchButtton());
  
 
});

Then('verify Employee', async ()=> {

    await AssertUtil.assertEquals(await CommonUtils.getElementTextFrame(pimFrame,pimPage.getEmployeeName()),"Hanu DSU");
     
 
});