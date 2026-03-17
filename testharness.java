import java.time.LocalDate;
import java.util.List;

import Travel.Activities.*;
import Travel.Community.*;
import Travel.Itinerary.*;
import Travel.Reviews.*;
import Travel.Reporting.*;
import Travel.Reporting.reporting_api;

public class testharness {
    public static void main(String[] args) {
        //Activities    
        System.out.println("---Activity Tests:---");
        ActivityListingService listingService = new ActivityListingService();
        List<Activity> activities = listingService.listPopular("Mountain", LocalDate.now());
        if(!activities.isEmpty()){
            System.out.println("Activities listed successfully: " + activities.get(0).getName());
        } else {
            System.out.println("No activities found for Mountain.");
        }

        ActivityFilter filter = new ActivityFilter();
        filter.setCategory("outdoors");
        List<Activity> filteredActivities = listingService.filterActivties("Mountain", LocalDate.now(), filter);
        if(!filteredActivities.isEmpty()){
            System.out.println("Activities filtered successfully: " + filteredActivities.get(0).getName());
        } else {
            System.out.println("No activities found for Mountain with the specified filter.");
        }
        System.out.println("---Activity Tests End---\n");

        //Itinerary
        System.out.println("---Itinerary Tests:---");

        //Reviews 
        System.out.println("---Review Tests:---");
        ReviewService reviewService = new ReviewService();
        ReviewForm form1 = new ReviewForm("This is a great place to visit!");
        Review review1 = reviewService.submitReview("user1", "business", "target1", form1);

        if(review1 != null){
            System.out.println("Review submitted successfully: " + review1.getReviewText());
        } else {
            System.out.println("Review submission failed.");
        }

        List<Review> reviews = reviewService.listReviews("business", "target1");
        if(!reviews.isEmpty()){
            System.out.println("Review listed successfully: " + reviews.get(0).getReviewText());
        } else {
            System.out.println("No reviews found for target1.");
        }

        ReviewForm spamForm = new ReviewForm("Hello");
        Review spamReview = reviewService.submitReview("user2", "business", "target1", spamForm);
        if(spamReview != null){
            System.out.println("Spam review submitted successfully: " + spamReview.getReviewText());
        } else {
            System.out.println("Spam review submission failed.");
        }
        System.out.println("---Review Tests End---\n");

        //Community 
        System.out.println("---Community Tests:---");
        BusinessSubmissionService submissionService = new BusinessSubmissionService();

        BusinessForm businessForm = new BusinessForm("Cafe", "location");
        SubmissionReceipt receipt = submissionService.submitBusiness("local", businessForm);
        if(receipt != null){
            System.out.println("Business submitted successfully: " + receipt.getSubmissionId());
        } else {
            System.out.println("Business submission failed.");
        }

        List<Business> businesses = submissionService.listLocalBusinesses("Location");
        if(!businesses.isEmpty()){
            System.out.println("Businesses listed successfully: " + businesses.get(0).getName());
        } else {
            System.out.println("No businesses found for Location.");
        }

        BusinessUpdateForm updateForm = new BusinessUpdateForm("New Cafe");
        submissionService.requestBusinessUpdate("local", receipt.getSubmissionId(), updateForm);
        System.out.println("---Community Tests End---\n");
        // reporting tests
        reportingTests();
    }

        private static void reportingTests() {
        // create two reports, one user and one business
        String id1 = reporting_api.createReport(
            "U123", "user",
            "The business was unclean and had poor customer service.",
            "Photo of the dirty restaurant; video of the rude employee.",
            "2024-06-01 14:30:00",
            "123 Main St, Anytown, USA");
        System.out.println("created report id = " + id1);

        String id2 = reporting_api.createReport(
            "B456", "business",
            "The user left a negative review without valid reasons.",
            "Screenshot of the review and the user's profile.",
            "2024-06-02 10:15:00",
            "456 Elm St, Othertown, USA");
        System.out.println("created report id = " + id2);

        // lookups
        System.out.println("\nlookup by id1:\n" +
            reporting_api.getReportById(id1));
        System.out.println("\nreports for owner U123:\n" +
            reporting_api.getReportsByOwner("U123"));
        System.out.println("\nreports for owner B456:\n" +
            reporting_api.getReportsByOwner("B456"));

        // error cases
        System.out.println("\nempty‑field create: " +
            reporting_api.createReport("", "", "", "", "", ""));
        System.out.println("non‑existent id: " +
            reporting_api.getReportById("no‑such‑id"));
        System.out.println("non‑existent owner: " +
            reporting_api.getReportsByOwner("noone"));
        }
}
