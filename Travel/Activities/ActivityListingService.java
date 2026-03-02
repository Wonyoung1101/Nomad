package Travel.Activities;

public class ActivityListingService {
    List<Activity> listPopular(String destination, LocalDate date) {
        //returns popular activties for a destination and date
    }

    List<Activity> filterActivties(String destination, LocalDate date, ActivityFilter filter) {
        //Applies user defined filters such as budget or category
    }
}