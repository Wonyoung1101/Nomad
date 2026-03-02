package Travel.Community;

import java.util.*;

public class SubmissionStatusService {
    private Map<String, SubmissionStatus> submissionStatuses = new HashMap<>();

    public SubmissionStatus getStatus(String submissionId){
        //business verification (rejection or acceptance)
        return submissionStatuses.get(submissionId);
    }   
}
