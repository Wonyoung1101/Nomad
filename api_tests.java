import Travel.Reporting.reporting_api;

public class api_tests {
    public static void main(String[] args) {
        // create two reports, one user and one business
        String id1 = reporting_api.createReport(
                "U123", "user",
                "The business was unclean and had poor customer service.",
                "Photo of the dirty restaurant; video of the rude employee.",
                "2024-06-01 14:30:00",
                "123 Main St, Anytown, USA");
        System.out.println("created report id = " + id1);

        String id2 = reporting_api.createReport(
                "B456", "business",
                "The user left a negative review without valid reasons.",
                "Screenshot of the review and the user's profile.",
                "2024-06-02 10:15:00",
                "456 Elm St, Othertown, USA");
        System.out.println("created report id = " + id2);

        // lookups
        System.out.println("\nlookup by id1:\n" +
                reporting_api.getReportById(id1));
        System.out.println("\nreports for owner U123:\n" +
                reporting_api.getReportsByOwner("U123"));
        System.out.println("\nreports for owner B456:\n" +
                reporting_api.getReportsByOwner("B456"));

        // error cases
        System.out.println("\nempty‑field create: " +
                reporting_api.createReport("", "", "", "", "", ""));
        System.out.println("non‑existent id: " +
                reporting_api.getReportById("no‑such‑id"));
        System.out.println("non‑existent owner: " +
                reporting_api.getReportsByOwner("noone"));
    }
}