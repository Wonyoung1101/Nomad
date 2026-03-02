package Travel.Reviews;

public class Review {
    private String reviewerId;
    private String userId;
    private String targetId;
    private String reviewText;

    public Review(String reviewerId, String userId, String targetId, String reviewText) {
        this.reviewerId = reviewerId;
        this.userId = userId;
        this.targetId = targetId;
        this.reviewText = reviewText;
    }

    public String getReviewerId() {
        return reviewerId;
    }
    public String getUserId() {
        return userId;
    }
    public String getTargetId(){
        return targetId;
    }
    public String getReviewText(){
        return reviewText;
    }
}
