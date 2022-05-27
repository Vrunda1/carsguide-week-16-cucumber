package au.com.carsguide.pages;


import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class NewAndUsedCarsPage extends Utility {

    private static final Logger log = LogManager.getLogger(NewAndUsedCarsPage.class.getName());

    public NewAndUsedCarsPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='heading main-heading item-ad-wrapper ']/h1")
    WebElement newAndSearchText;
    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement make;
    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement model;
    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement location;
    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement price;
    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findMyNextCarButton;


    public String verifyNewAndUsedCarsSearch(){
        log.info("getting NewAndUsed cars text  "+newAndSearchText.toString());
        return getTextFromElement(newAndSearchText);
    }
    public void selectCarMake(String making){
        selectByVisibleTextFromDropDown(make,making);
        log.info("Selecting Car Make"+making+" from dropdown "+make.toString() );
    }
    public void selectCarModel(String modelecar){
        selectByVisibleTextFromDropDown(model,modelecar);
        log.info("Selecting Car model"+modelecar+" from dropdown "+model.toString() );
    }
    public void selectCarLocation(String loc){
        selectByVisibleTextFromDropDown(location,loc);
        log.info("Selecting Car Location"+location+" from dropdown "+loc.toString() );
    }
    public void selectCarPrice(String pri){
        selectByVisibleTextFromDropDown(price,pri);
        log.info("Selecting Car price"+pri+" from dropdown "+price.toString() );
    }
    public void clickOnFindMyCar(){
        clickOnElement(findMyNextCarButton);
        log.info("Clicking on FindMyCar Button "+ findMyNextCarButton.toString());
    }
    public String verifyMake(){
        log.info("getting Make text "+make.toString());
        return getTextFromElement(make);
    }





}
