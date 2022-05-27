package au.com.carsguide.steps;

import au.com.carsguide.pages.DealersPage;
import au.com.carsguide.pages.HomePage;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

import java.util.List;

public class DealersStep {
    @And("^I click ‘Find a Dealer’ link$")
    public void iClickFindADealerLink() {
        new HomePage().clickOnFindDealers();
    }

    @Then("^I see the dealer lists$")
    public void iSeeTheDealerLists(DataTable dataTable) {
        List<String> expectedList = dataTable.asList(String.class);
        for (String test : expectedList) {
            while (new DealersPage().getDealers(test)==null){
                new DealersPage().clickOnNextButton();
            }
            Assert.assertEquals("Dealers not found :",test,new DealersPage().getDealers(test));

        }
    }
}
