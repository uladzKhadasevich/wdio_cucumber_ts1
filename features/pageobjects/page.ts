/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
     public get notifications() {
        return $("#bell");
    }

    public get profile() {
        return $("#profile-imgl");
    }
    
    public get dashboard() {
        return $("li[title='Dashboard']");
    }
    
    public get hardware() {
        return $("li[title='Hardware']");
    }
    
    public get software() {
        return $("li[title='Software']");
    }

    public get issuedLicenses() {
        return $("li[title='Issued Licenses']");
    }

    public get requests() {
        return $("li[title='Requests']");
    }

    public get about() {
        return $("li[title='About']");
    }

    public get titleInsideBody() {
        return $("h3");
    }

    public open(path: string): Promise<string> {
        return browser.url(`https://ej2.syncfusion.com/showcase/vue/assetmanagement/#/${path}`)
    }

}
