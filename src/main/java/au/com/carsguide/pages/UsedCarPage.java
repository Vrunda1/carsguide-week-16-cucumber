package au.com.carsguide.pages;


import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class UsedCarPage extends Utility {
    private static final Logger log = LogManager.getLogger(UsedCarPage.class.getName());

    public UsedCarPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
             @FindBy(xpath = "//select[@id='models']")
            WebElement usedCarModel;

    @FindBy(xpath = "//h1[contains(text(),'Used Cars For Sale')]")
    WebElement usedCarText;
            @CacheLookup
            @FindBy(xpath = "//select[@id='makes']")
            WebElement usedCarsMake;

            @CacheLookup
            @FindBy(xpath = "//select[@id='priceTo']")
            WebElement usedCarsPrice;

            @CacheLookup
            @FindBy(xpath = "//select[@id='locations']")
            WebElement usedCarsLocation;

            @CacheLookup
            @FindBy(xpath = "//input[@id='search-submit']")
            WebElement myNextCarButton;

    public void selectUsedCarMake(String making){
        selectByVisibleTextFromDropDown(usedCarsMake,making);
        log.info("Selecting Car Make"+making+" from dropdown "+usedCarsMake.toString() );
    }
    public void selectUsedCarModel(String mod){
        selectByVisibleTextFromDropDown(usedCarModel,mod);
        log.info("Selecting Car Model "+mod+" from dropdown "+usedCarModel.toString() );
    }
    public void selectUsedCarLocation(String loc){
        selectByVisibleTextFromDropDown(usedCarsLocation,loc);
        log.info("Selecting Car Location "+loc+" from dropdown "+usedCarsLocation.toString() );
    }
    public void selectUsedCarPrice(String pric){
        selectByVisibleTextFromDropDown(usedCarsPrice,pric);
        log.info("Selecting Car price "+pric+" from dropdown "+usedCarsPrice.toString() );
    }
    public void clickOnFindMyNextCarButton(){
        clickOnElement(myNextCarButton);
        log.info("Clicking Find myNextCar Button "+myNextCarButton.toString() );
    }
    public String verifyUsedCarText(){
        log.info("getting Make text "+usedCarText.toString());
        return getTextFromElement(usedCarText);
    }
}
