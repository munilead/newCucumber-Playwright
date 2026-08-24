import configData from '../config/configData.json';

import { Browser,chromium,firefox,FrameLocator,Locator,Page } from '@playwright/test';

import AssertUtil  from './AssertUtil';





export class CommonUtils
{
    static configData:any = configData;
    static browser:Browser;
    static page:Page;


    static async startBrowser():Promise<void>
    {
        try
        {
            //launchig the browser
            const browserName:string=this.configData.browser.toLowerCase();
            switch(browserName)
            {
                case "firefox":
                    this.browser=await firefox.launch({headless:false});
                    break;
                case "chromium":
                    this.browser=await chromium.launch({headless:false});
                    break;
                default:
                    console.log("invalid browser name ->launching chrome browser by default")
                     this.browser=await chromium.launch({headless:false});
                    break;
            }
            //open new tab or page
            this.page=await this.browser.newPage();
            //navigate to application url
            await this.page.goto(configData.URL);



        }
        catch(error:any)
        {
            console.log("failed to start browser" +error.message);

        }


    }
    

    static  findElement(selector:string):Locator
    {
        let element:Locator=null as any;

        try
        {
           element=  this.page.locator(selector);

        }
        catch(error:any)
        {

             AssertUtil.assertFalse(error.message);

        }

        return element;

    }




    static async enterValue(selector:string,value:string):Promise<void>
    {

        try
        {
          let element=await this.findElement(selector);
          await element.fill(value);
          

        }
        catch(error:any)
        {
            AssertUtil.assertFalse(error.message);
            
        }



    }

    static async clickElement(selector:string):Promise<void>
    {

        try
        {
            await this.findElement(selector).click();


        }
        catch(error:any)
        {

             AssertUtil.assertFalse(error.message);

        }





    }


    static async getElementText(selector:string):Promise<string>
    {
        let text:string="";

        try
        {

            let pageText:string | null=await this.findElement(selector).textContent();

            if(pageText!=null)
            {
                text=pageText;//welcome krishna
            }


        }

        catch(error:any)
        {

            AssertUtil.assertFalse(error.message);

        }

        return text;




    }


    static async movetoElement(selector:string):Promise<void>
    {
        try
        {
            await this.findElement(selector).hover();

        }

        catch(error:any)
        {
            AssertUtil.assertFalse(error.message);
        }


    }



    static async switchToFrameByIdorName(selector:string):Promise<FrameLocator>
    {

        let element:FrameLocator=null as any


        try
        {

           element= await this.page.frameLocator(selector);


        }
        catch(error:any)
        {
             
            AssertUtil.assertFalse(error.message);
        }


        return element

    }

    static async getElementTextFrame(pimFrame:FrameLocator,selector:string):Promise<string>
    {

        let text:string="";

        try
        {
             let pimText:string | null=await pimFrame.locator(selector).textContent();
             if(pimText!=null)
            {
                text=pimText;
            }
             

        }
        catch(error:any)
        {
            AssertUtil.assertFalse(error.message);

        }

        return text;


    }

    static async enterValueInFrame(pimFrame:FrameLocator,selector:string,value:string):Promise<void>
    {

        try
        {

            await pimFrame.locator(selector).fill(value);


        }
        catch(error:any)
        {

             AssertUtil.assertFalse(error.message);

        }


    }


    static async clickElementInFrame( pimFrame:FrameLocator,selector:string):Promise<void>
    {


        try
        {
            await pimFrame.locator(selector).click();

        }
        catch(error:any)
        {
            AssertUtil.assertFalse(error.message);

        }

    }


    static async selectDropdownValue(pimFrame:FrameLocator,selector:string,option:string):Promise<void>
    {

        try
        {
            await pimFrame.locator(selector).selectOption(option);

        }
        catch(error:any)
        {AssertUtil.assertFalse(error.message);


        }

    }

    static async hardWait(seconds:number):Promise<void>
    {
        await this.page.waitForTimeout(seconds*1000);

    }


    static async closeBrowser():Promise<void>
    {
        await this.browser.close();


    }

   

    

    















}