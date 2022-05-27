package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class DealersPage extends Utility {
    private static final Logger log = LogManager.getLogger(DealersPage.class.getName());

    public DealersPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='dealerListing--name']//a")
    List<WebElement> dealersList;


    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Next')]")
    WebElement nextButton;

    public void clickOnNextButton(){
        clickOnElement(nextButton);
    }

    public String getDealers(String text) {
        for (WebElement data : dealersList) {
            String a = data.getText();
            if (a.equalsIgnoreCase(text)) {
                return a;
            }
        }
        //log.info("Getting dealers name :" + dealersList.toString());
        return null;
    }
}