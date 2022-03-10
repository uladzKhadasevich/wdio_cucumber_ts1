import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AboutPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    public open(): Promise<string> {
        return super.open('About');
    }
}

export default new AboutPage();