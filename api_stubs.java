// here we can begin to stub out the API calls that we will be making to the backend
public class api_stubs{
//Wonyoung


//Seni


//Daniela - Reviews and Community
//Reviews
public ReviewService{
    List<Review> listReviews(String targetType, String targetId) {
        //Retrieves reviews for the sort of business they are trying to find
    }

    Review submitReview(String userId, String targetType, String targetId, ReviewForm form) {
        //User is able to find the business they are looking for and submit a review
    }

    ReviewResponse respondToReview(String userId, String reviewId, String text){
        //User responds to other reviews
    }
}



//Chris


}