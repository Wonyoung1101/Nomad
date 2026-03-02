package Travel.APITests;

import Travel.Reviews.*;
import Travel.Community.*;

import java.util.*;

public class api_tests {
    public static void main(String[] args) {
        //where we can test our apis

        System.out.println("---API TESTS:---\n");

        //Authentication - Wonyoung


        //Accommodation - Wonyoung


        //Activities - Seni


        //Itinerary - Seni


        //Reviews - Daniela 
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

        //Community - Daniela
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

        //Reporting - Chris


        //Administration - Chris
    }
}