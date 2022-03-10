import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HardwarePage extends Page {
    /**
     * define selectors using getter methods
     */
    

    public get addNewHardwareButton() {
        return $("button*=Add");
    }

    public open(): Promise<string> {
        return super.open('Hardware');
    }
}

export default new HardwarePage();