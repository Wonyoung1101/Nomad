package Travel.Community;

import java.util.*;

public class BusinessSubmissionService {
    public SubmissionReceipt submitBusiness(String localMemberId, BusinessForm form) {
        //user submit business form
        System.out.println("Business submitted by user: " + localMemberId);
        return new SubmissionReceipt("abc123", "PENDING");
    }

    public List<Business> listLocalBusinesses(String destination){
        //display business list
        List<Business> businesses = new ArrayList<>();
        businesses.add(new Business("b1", "resturant", location, true));
        businesses.add(new Business("b2", "attraction", location, true));
        return businesses;
    }

    public void requestBusinessUpdate(String localMemberId, String businessId, BusinessUpdateForm form){
        //update business form
        System.out.println("Update requested for business ID: " + businessId);
    }
}
