package au.com.carsguide.steps;

import au.com.carsguide.pages.HomePage;
import au.com.carsguide.pages.NewAndUsedCarsPage;
import au.com.carsguide.pages.ResultPage;
import au.com.carsguide.pages.UsedCarPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SelectCarTest {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }

    @When("^I mouse hover on “buy\\+sell” tab$")
    public void iMouseHoverOnBuySellTab() throws InterruptedException {
        Thread.sleep(2000);
        new HomePage().mouseHoverTobuySell();

    }

    @And("^I click ‘Search Cars’ link$")
    public void iClickSearchCarsLink() {
        new HomePage().clickOnSearchCar();
    }

    @Then("^I navigate to ‘new and used car search’ page$")
    public void iNavigateToNewAndUsedCarSearchPage(String message) {
        Assert.assertEquals("Cannot navigate to search cars page ", message, new NewAndUsedCarsPage().verifyNewAndUsedCarsSearch());


    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String making) {
        new NewAndUsedCarsPage().selectCarMake(making);

    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String mode) {
        new NewAndUsedCarsPage().selectCarModel(mode);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String loc) {
        new NewAndUsedCarsPage().selectCarLocation(loc);

    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String pri) {
        new NewAndUsedCarsPage().selectCarPrice(pri);

    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new NewAndUsedCarsPage().clickOnFindMyCar();
    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String text) {
        Assert.assertTrue(text, new ResultPage().verifyUsedCarMake().contains(text));
    }

    @Then("^I navigate to \"([^\"]*)\" page$")
    public void iNavigateToPage(String text) {
        Assert.assertEquals("Cannot navigate to Result page ", text, new NewAndUsedCarsPage().verifyNewAndUsedCarsSearch());

    }


    @Then("^I navigate to \"([^\"]*)\" used cars for sale page$")
    public void iNavigateToUsedCarsForSalePage(String text) {
        Assert.assertEquals("Cannot navigate to Result page ", text, new UsedCarPage().verifyUsedCarText());


    }

    @And("^I click used  link$")
    public void iClickUsedLink() {
        new HomePage().clickOnUsedCars();

    }

    @And("^I select model  \"([^\"]*)\" from used cars$")
    public void iSelectModelFromUsedCars(String usemodel) {
        new UsedCarPage().selectUsedCarModel(usemodel);
    }
}







