import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import Travel.AuthAccommodationation;

import Travel.Activities.*;
import Travel.Community.*;
import Travel.Itinerary.*;
import Travel.Reviews.*;
import Travel.Reporting.*;
import Travel.Reporting.reporting_api;

public class testharness {
    public static void main(String[] args) {
        // Activities
        System.out.println("---Activity Tests:---");
        ActivityListingService listingService = new ActivityListingService();
        List<Activity> activities = listingService.listPopular("Mountain", LocalDate.now());
        if (!activities.isEmpty()) {
            System.out.println("Activities listed successfully: " + activities.get(0).getName());
        } else {
            System.out.println("No activities found for Mountain.");
        }

        ActivityFilter filter = new ActivityFilter();
        filter.setActivityType("Mountain");
        List<Activity> filteredActivities = listingService.filterActivities("Mountain", LocalDate.now(), filter);
        if (!filteredActivities.isEmpty()) {
            System.out.println("Activities filtered successfully: " + filteredActivities.get(0).getName());
        } else {
            System.out.println("No activities found for Mountain with the specified filter.");
        }
        System.out.println("---Activity Tests End---\n");

        // Itinerary
        System.out.println("---Itinerary Tests:---");

        LocalDateTime preferredTime = LocalDateTime.of(2024, 6, 15, 10, 0);
        ItineraryItem item1 = new ItineraryItem("item1", "user123", "hike01", preferredTime, false);
        System.out.println("ItineraryItem created: " + item1.getActivityId() + " at " + item1.getPreferredTime());

        UserItinerary userItinerary = new UserItinerary("user123", java.math.BigDecimal.valueOf(500));
        userItinerary.addItem(item1);
        System.out.println("UserItinerary created with " + userItinerary.getItems().size() + " items");
        System.out.println("Remaining budget: $" + userItinerary.getRemainingBudget());

        BudgetCalculation budgetCalc = new BudgetCalculation();
        ItineraryService itineraryService = new ItineraryService(budgetCalc);

        itineraryService.addItem("user123", item1);
        List<ItineraryItem> userItems = itineraryService.listItems("user123");
        System.out.println("ItineraryService has " + userItems.size() + " items for user123");

        LocalDateTime newTime = LocalDateTime.of(2024, 6, 15, 14, 0);
        itineraryService.updateSchedule("user123", "item1", newTime);
        System.out.println("Schedule updated for item1");

        itineraryService.removeItem("user123", "item1");
        userItems = itineraryService.listItems("user123");
        System.out.println("After removal, user123 has " + userItems.size() + " items");

        System.out.println("---Itinerary Tests End---\n");

        // Reviews
        System.out.println("---Review Tests:---");
        ReviewService reviewService = new ReviewService();
        ReviewForm form1 = new ReviewForm("This is a great place to visit!");
        Review review1 = reviewService.submitReview("user1", "business", "target1", form1);

        if (review1 != null) {
            System.out.println("Review submitted successfully: " + review1.getReviewText());
        } else {
            System.out.println("Review submission failed.");
        }

        List<Review> reviews = reviewService.listReviews("business", "target1");
        if (!reviews.isEmpty()) {
            System.out.println("Review listed successfully: " + reviews.get(0).getReviewText());
        } else {
            System.out.println("No reviews found for target1.");
        }

        ReviewForm spamForm = new ReviewForm("Hello");
        Review spamReview = reviewService.submitReview("user2", "business", "target1", spamForm);
        if (spamReview != null) {
            System.out.println("Spam review submitted successfully: " + spamReview.getReviewText());
        } else {
            System.out.println("Spam review submission failed.");
        }
        System.out.println("---Review Tests End---\n");

        // Community
        System.out.println("---Community Tests:---");
        BusinessSubmissionService submissionService = new BusinessSubmissionService();

        BusinessForm businessForm = new BusinessForm("Cafe", "location");
        SubmissionReceipt receipt = submissionService.submitBusiness("local", businessForm);
        if (receipt != null) {
            System.out.println("Business submitted successfully: " + receipt.getSubmissionId());
        } else {
            System.out.println("Business submission failed.");
        }

        List<Business> businesses = submissionService.listLocalBusinesses("Location");
        if (!businesses.isEmpty()) {
            System.out.println("Businesses listed successfully: " + businesses.get(0).getName());
        } else {
            System.out.println("No businesses found for Location.");
        }

        BusinessUpdateForm updateForm = new BusinessUpdateForm("New Cafe");
        submissionService.requestBusinessUpdate("local", receipt.getSubmissionId(), updateForm);
        System.out.println("---Community Tests End---\n");

        // Authentication
        System.out.println("---Authentication Tests:---");

        AuthAccommodationation.AuthService authService = new AuthAccommodationation.AuthService();

        try {
            AuthAccommodationation.UserAccount account =
                authService.signUp("wonyoung@example.com", "Pass1234", "Wonyoung Park");
            System.out.println("Sign up successful: " + account);

            AuthAccommodationation.UserSession session =
                authService.login("wonyoung@example.com", "Pass1234");
            System.out.println("Login successful: " + session);

            System.out.println("Is authenticated: " + authService.isAuthenticated(session.sessionId));

            authService.logout(session.sessionId);
            System.out.println("After logout, is authenticated: " + authService.isAuthenticated(session.sessionId));
        } catch (Exception e) {
            System.out.println("Authentication test failed: " + e.getMessage());
        }

        System.out.println("---Authentication Tests End---\n");

        // Accommodation
        System.out.println("---Accommodation Tests:---");

        try {
            AuthAccommodationation.AccommodationSearchService searchService =
                new AuthAccommodationation.AccommodationSearchService();

            AuthAccommodationation.AccommodationCostEstimator costEstimator =
                new AuthAccommodationation.AccommodationCostEstimator();

            AuthAccommodationation.AccommodationSelectionService selectionService =
                new AuthAccommodationation.AccommodationSelectionService();

            AuthAccommodationation.DateRange dateRange =
                new AuthAccommodationation.DateRange(
                    LocalDate.of(2024, 6, 15),
                    LocalDate.of(2024, 6, 18)
                );

            List<AuthAccommodationation.AccommodationOption> options =
                searchService.search("Tokyo", dateRange, 2, AuthAccommodationation.LodgingType.HOTEL);

            if (!options.isEmpty()) {
                AuthAccommodationation.AccommodationOption option = options.get(0);
                System.out.println("Accommodation found: " + option);

                AuthAccommodationation.CostBreakdown breakdown =
                    costEstimator.calculateExactTotal(option, dateRange, 2);
                System.out.println("Exact cost breakdown: " + breakdown);

                AuthAccommodationation.CostEstimateResult estimate =
                    costEstimator.estimateIfExactUnavailable(option, dateRange, 2);
                System.out.println("Estimate result: " + estimate);

                AuthAccommodationation.ItineraryItem itineraryItem =
                    selectionService.addToItinerary("user123", option, dateRange, 2);
                System.out.println("Added to itinerary: " + itineraryItem);

                List<AuthAccommodationation.ItineraryItem> itinerary =
                    selectionService.getItinerary("user123");
                System.out.println("Itinerary size for user123: " + itinerary.size());
            } else {
                System.out.println("No accommodation options found.");
            }
        } catch (Exception e) {
            System.out.println("Accommodation test failed: " + e.getMessage());
        }

        System.out.println("---Accommodation Tests End---\n");

        // Reporting
        reportingTests();
    }

    private static void reportingTests() {
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

        System.out.println("\nlookup by id1:\n" +
            reporting_api.getReportById(id1));
        System.out.println("\nreports for owner U123:\n" +
            reporting_api.getReportsByOwner("U123"));
        System.out.println("\nreports for owner B456:\n" +
            reporting_api.getReportsByOwner("B456"));

        System.out.println("\nempty-field create: " +
            reporting_api.createReport("", "", "", "", "", ""));
        System.out.println("non-existent id: " +
            reporting_api.getReportById("no-such-id"));
        System.out.println("non-existent owner: " +
            reporting_api.getReportsByOwner("noone"));
    }
}
