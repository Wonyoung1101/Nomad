package Travel.Community;

public class SubmissionReceipt {
    private String submissionId;

    public SubmissionReceipt(String submissionId) {
        this.submissionId = submissionId;
    }

    public String getSubmissionId(){
        return submissionId;
    }

    @Override
    public String toString() {
        return "SubmissionReceipt{submissionId='" + submissionId + "'}";
    }
}
