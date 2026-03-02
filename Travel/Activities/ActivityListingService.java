package Travel.Activities;

import java.time.LocalDate;
import java.it.List;
import java.util.ArrayList;
import java.util.stream.Collectors;

public class ActivityListingService {

    private final List<Activity> activitiesDatabase = new ArrayList<>(); // This will act as our in-memory database for activities

    public ActivityListingService() {
        activitiesDatabase.add(new Activity("hike01", "Mountain Hike", "A sceneic 5 mile trail", "outdoors", 50));
        activitiesDatabase.add(new Activity("museum01", "Art Museum", "A world class art museum with exhibits from around the world", "indoor", 20));
        activitiesDatabase.add(new Activity("foodtour01", "Food Tour", "A guided tour of the best local food spots in the city", "food", 75));
    }
    
    public List<Activity> listPopular(String destination, LocalDate date) {
        //returns popular activties for a destination and date
        return activitiesDatabase.stream()
                .filter(activity -> activity.getDestination().equalsIgnoreCase(destination) && activity.isAvailableOn(date))
                .collect(Collectors.toList()); // In a real implementation, this would make an HTTP request to the backend to fetch popular activities for the given destination and date
    }

    public List<Activity> filterActivties(String destination, LocalDate date, ActivityFilter filter) {
        //Applies user defined filters such as budget or category
        return activitiesDatabase.stream()
                .filter(activity -> activity.getDestination().equalsIgnoreCase(destination) && activity.isAvailableOn(date))
                .filter(activity -> filter.matches(activity)) // Apply the user-defined filter to the activities
                .collect(Collectors.toList()); // In a real implementation, this would make an HTTP request to the backend to fetch activities for the given destination and date, and then apply the filters on the client side
    }
}