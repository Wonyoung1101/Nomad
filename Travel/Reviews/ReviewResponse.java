package Travel.Reviews;

public class ReviewResponse {
    private String reviewerId;
    private String responseText;
    
    public ReviewResponse(String reviewerId, String responseText){
        this.reviewerId = reviewerId;
        this.responseText = responseText;
    }

    public String getReviewerId() {
        return reviewerId;
    }
    public String getResponseText() {
        return responseText;
    }
}
