import { test, FrameLocator } from "@playwright/test";
import "../step-definitions/BaseTest";
import { LoginPage } from "../pages/LoginPage";
import  PIMPage from "../pages/PIMPage";
import { CommonUtils } from "../utils/CommonUtils";
import configData from "../config/configData.json";
import AssertUtil  from "../utils/AssertUtil";

let loginPage:LoginPage=new LoginPage();
let pimPage:PIMPage=new PIMPage();

test("verify employee can be added successfully",async ()=>{
    //login
   await loginPage.login();


    //await CommonUtils.hardWait(7);
   //verify welcome page
 await AssertUtil.assertEquals(await CommonUtils.getElementText(loginPage. getWelcomePage()),"Welcome krishna");

 //Mouse hover on pim
 await CommonUtils.movetoElement(pimPage.getPim());

 //click on addEmployee
 await CommonUtils.clickElement( pimPage.getaddEmp());

 //identyfy the frame
 let pimFrame:FrameLocator=await CommonUtils.switchToFrameByIdorName(pimPage.getIframe());

 //verify addemployee text
 await AssertUtil.assertEquals(await CommonUtils.getElementTextFrame(pimFrame,pimPage.getaddEmpText()),"PIM : Add Employee");
 
 //enter the firstname in frame
  await CommonUtils.enterValueInFrame(pimFrame,pimPage.getFirstname(),configData.firstname);

  //enter the lastname in frame

  await CommonUtils.enterValueInFrame(pimFrame,pimPage.getLastname(),configData.lastname);


  //click on save button in frame
    await CommonUtils.clickElementInFrame( pimFrame,pimPage.getSave());

//click on edit button

await CommonUtils.clickElementInFrame( pimFrame,pimPage.getEdit());

//click on save button
await CommonUtils.clickElementInFrame( pimFrame,pimPage.getFrameSave());

//click on back button

await CommonUtils.clickElementInFrame( pimFrame,pimPage.getBack());

//select dropdown value
await CommonUtils.selectDropdownValue(pimFrame,pimPage.getsearchByDropdown(),"Emp. First Name");

//serch eemployee

 await CommonUtils.enterValueInFrame(pimFrame,pimPage.getSearchFor(),"Hanu");

 //click on serach button

 await CommonUtils.clickElementInFrame( pimFrame,pimPage.getSearchButtton());
await CommonUtils.hardWait(6);
 //verify employee text
 await AssertUtil.assertEquals(await CommonUtils.getElementTextFrame(pimFrame,pimPage.getEmployeeName()),"Hanu DSU");
 
 //await CommonUtils.hardWait(5);









 



})