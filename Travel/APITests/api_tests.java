package Travel.APITests;

import Travel.Reviews.*;
import Travel.Community.*;

import java.util.*;

public class api_tests {
    public static void main(String[] args) {
        //where we can test our apis

        System.out.println("API TESTS: \n");

        //Authentication - Wonyoung


        //Accommodation - Wonyoung


        //Activities - Seni


        //Itinerary - Seni


        //Reviews - Daniela 
        System.out.println("Review Tests: ");
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

        //Community - Daniela
        System.out.println("Community Tests: ");


        //Reporting - Chris


        //Administration - Chris
    }
}