package au.com.carsguide.pages;


import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Search Cars')]")
    WebElement searchCar;
    @CacheLookup
    @FindBy(xpath = "//div[@class='uhf-child-content']//a[contains(text(),'Used')]")
    WebElement usedCars;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement buyPlusSell;
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Find a Dealer')]")
    WebElement finddealers;

    public void mouseHoverTobuySell(){
        mouseHoverToElement(buyPlusSell);
        log.info("Mouse hover on  buyPlusSell  "+ buyPlusSell.toString());
    }
    public void clickOnSearchCar(){
        clickOnElement(searchCar);
        log.info("Clicking on search Car  "+ searchCar.toString());
    }
    public void clickOnUsedCars(){
        clickOnElement(usedCars);
        log.info("Clicking on used Car "+ usedCars.toString());
    }
    public void clickOnFindDealers() {
        clickOnElement(finddealers);

    }

    }











