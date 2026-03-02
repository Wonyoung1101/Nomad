package Travel.Reviews;

import java.util.*;

public class ReviewService {

    private List<Review> reviews = new ArrayList<>();
    private ModerationService moderationService = new ModerationService();

    public List<Review> listReviews(String targetType, String targetId){
        //retrieves reviews for the businesses

        List<Review> result = new ArrayList<>();
        for (Review r : reviews) {
            if (r.getTargetId().equals(targetId)){
                result.add(r);
            }
        }
        return result;
    }

    public Review submitReview(String userId, String targetType, String targetId, ReviewForm form){
        //user finds business and submit a review

        if(moderationService.isSpam(form)){
            System.out.println("Review rejected: Spam detected.");
            return null;
        }

        ModerationResult result = moderationService.checkLanguage(form.getReviewText());
        if (moderationService.isSpam(form)){
            System.out.println("Review rejected: " + result.getMessage());
            return null;
        }

        Review review = new Review(
            UUID.randomUUID().toString(), 
            userId, 
            targetId, 
            form.getReviewText()
        );

        reviews.add(review);
        return review;
    }

    public ReviewResponse respondToReview(String uderId, String reviewId, String text){
        //user respons to other reviews

        return new ReviewResponse(reviewId, text);
    }
}
