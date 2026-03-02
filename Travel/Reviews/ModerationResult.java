package Travel.Reviews;

public class ModerationResult {
    private boolean approved;
    private String message;

    public ModerationResult(boolean approved, String message){
        this.approved = approved;
        this.message = message;
    }

    public boolean isApproved() {
        return approved;
    }
    public String getMessage() {
        return message;
    }
    
}
