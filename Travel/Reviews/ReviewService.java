package Travel.Reviews;

import java.util.List;

public class ReviewService {
    public List<Review> listReviews(String targetType, String targetId){
        //retrieves reviews for the businesses
    }

    public Review submitReview(String userId, String targetType, String targetId, ReviewForm form){
        //user finds business and submit a review
    }

    public ReviewResponse respondToReview(String uderId, String reviewId, String text){
        //user respons to other reviews
    }
}
