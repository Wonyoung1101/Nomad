package Travel.Community;

import java.util.*;

public class BusinessSubmissionService {

    private Map<String, Business> businesses = new HashMap<>();
    private Map<String, SubmissionStatus> submissionStatuses = new HashMap<>();

    public SubmissionReceipt submitBusiness(String localMemberId, BusinessForm form) {
        //user submit business form

        String submissionId = UUID.randomUUID().toString();
        
        Business business = new Business(submissionId, form.getName(), form.getDestination());
        businesses.put(submissionId, business);

        submissionStatuses.put(submissionId, SubmissionStatus.PENDING);

        return new SubmissionReceipt(submissionId);
    }

    public List<Business> listLocalBusinesses(String destination){
        //display business list

        List<Business> businesses = new ArrayList<>();

        for (Business business : this.businesses.values()) {
            if (business.getDestination().equalsIgnoreCase(destination)) {
                businesses.add(business);
            }
        }
        return businesses;
    }

    public void requestBusinessUpdate(String localMemberId, String businessId, BusinessUpdateForm form){
        //update business form

        Business business = businesses.get(businessId);
        if (business != null) {
            businesses.put(businessId, 
                new Business(businessId, form.getUpdate(), business.getDestination()));
        }
    }

}
