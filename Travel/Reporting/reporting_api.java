package Travel.Reporting;

import java.util.HashMap; // added this to create the bones of what searching for a userID would be 
import java.util.Map;   

public class reporting_api {
    // This class will contain methods to interact with the reporting API
    // We will stub out the methods that we will be using to fetch reports from the backend
    
    // Methodd to create a new report. Should assign a reportID to each case and 
    // return the reportID to the user. This will be used to track the case and
    // for the user to check the status of their case.
    private static Map<String, Report> reportsDatabase = new HashMap<>(); // This will act as our in-memory database for reports(faking the backend )

    public static String createReport(String ownerId, String ownerType, String description, String evidence, String dateTime, String location) {
        // In a real implementation, this would make an HTTP request to the backend to create a new report
        // For now, we will return a hardcoded response
    if (ownerId.isEmpty() || ownerType.isEmpty() || description.isEmpty() || evidence.isEmpty() || dateTime.isEmpty() || location.isEmpty()) {
        return "Error: All fields are required to create a report.";
    }
        String reportId = Integer.toString((int)(Math.random() * 100000)); // Generate a random report ID
        
    Report newReport = new Report(reportId, ownerId, ownerType, description, evidence, dateTime, location); // Create a new report object with the provided details
    reportsDatabase.put(reportId, newReport); // Store the report object in our in-memory
    return reportId; // Return the generated report ID to the user

        // String reportDetails = "Report ID: " + reportId + "\nUser ID: " + userId + "\nDescription: " + description + "\nEvidence: " + evidence + "\nDate and Time: " + dateTime + "\nLocation: " + location;
        // reportsDatabase.put(reportId, reportDetails); // Store the report details in our in-memory
        // return reportId; // Return the generated report ID to the user
    }

    // Method to get a report by its ID
    public static String getReportById(String reportId) {
        // In a real implementation, this would make an HTTP request to the backend
        // For now, we will return a hardcoded response
        // this method would to search API for the report with the given reportId and return the details of the report to the user 
        if (reportsDatabase.containsKey(reportId)) {
            return reportsDatabase.get(reportId).toString(); // Return the report details if found
        } else {
            return "Report not found for report ID: " + reportId; // Return an error message if the report is not found
        }
    }

    // Method to get all reports for a specific user or business
    static class Report{
        String reportId;
        String ownerId;
        String ownerType; // can be "user" or "business", this merges the search for both user and business reports into one method, we can just specify the ownerType when creating the report and then search for it here option
        String description;
        String evidence;
        String dateTime;
        String location;

        Report(String reportId, String ownerId, String ownerType, String description, String evidence, String dateTime, String location) {
            this.reportId = reportId;
            this.ownerId = ownerId;
            this.ownerType = ownerType;
            this.description = description;
            this.evidence = evidence;
            this.dateTime = dateTime;
            this.location = location;
        }
        @Override
        public String toString() {
            return "Report ID: " + reportId + "\nOwner ID: " + ownerId + "\nOwner Type: " + ownerType + "\nDescription: " + description + "\nEvidence: " + evidence + "\nDate and Time: " + dateTime + "\nLocation: " + location;
        }
    }
    public static String getReportsByOwner(String ownerId) {
        // In a real implementation, this would make an HTTP request to the backend
        // For now, we will return a hardcoded response
        StringBuilder result = new StringBuilder();
        boolean found = false;
        for (Report report : reportsDatabase.values()) {
            if (report.ownerId.equals(ownerId)) {
                result.append(report.toString()).append("\n\n"); // Append the report details to the result string
                found = true;
            }
        }
        if (found) {
            return result.toString(); // Return the report details if found
        } else {
            return "No reports found for owner ID: " + ownerId; // Return an error message if no reports are found for the given owner ID
    }
    // Prconditions needed for 1. Proof of purschas 1. Explaintaiton box(explain what happened ) 3. Proof of evidence (Add a picture or video) 4. Date and time of the incident 5. Location of the incident 6. Contact information of the person reporting the incident(this would just be the user info)
    // after all fileds are filled out there needs to repsonse the return "Thank you for your submission "
    }
}
