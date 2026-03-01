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

public ModerationService{
    ModerationResult checkLanguage(String text){
        //Looks for inapproriate language
    }

    boolean isSpam(ReviewForm form){
        //identify spam or bot-generated reviews
    }
}

//Community
public BusinessSubmissionService{
    SubmissionReceipt submitBusiness(String localMemberId, BusinessForm form) {
        //user submit business in the business form
    }

    List<Business> listLocalBusinesses(String destination) {
        //list display of verified businesses
    }

    void requestBusinessUpdate(String localMemberId, String businessId, BusinessUpdateForm form) {
        //update form for business that already have a business
    }
}

public SubmissionStatusService{
    SubmissionStatus getStatus(String submissionId){
        //Status update (verified or rejected)
    }
}

//Chris


}