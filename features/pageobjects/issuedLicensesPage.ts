import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class IssuedLicensesPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    public open(): Promise<string> {
        return super.open('IssuedLicenses');
    }
}

export default new IssuedLicensesPage();